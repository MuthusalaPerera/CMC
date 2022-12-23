import {
    BadRequestException,
    Injectable,
    NotFoundException
} from "@nestjs/common"
import {UsersService} from "./users.service"
import {randomBytes, scrypt as _script} from "crypto"
import {promisify} from "util"
import {User} from "./user.entity"
import {CreateUserDto} from "./dtos/create-user.dto"
import {InjectRepository} from "@nestjs/typeorm"
import {UsersDropDown} from "../IntialDB/Users"
import {Repository} from "typeorm"
import Login from "../IntialDB/Login"
import UserType from "../IntialDB/UserRolls"
import {LoginDto} from "./dtos/login.dto"
import {ForgetDto} from "./dtos/Forget.dto"
import {MailerService} from "@nestjs-modules/mailer"
import { join } from 'path';
const scrypt = promisify(_script)

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserType) private readonly userTypeRepository: Repository<UserType>,
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        @InjectRepository(Login) private readonly loginRepository: Repository<Login>,
        private readonly mailerService: MailerService
    ) {
    }

    async signup(createUserDto: CreateUserDto) {

        const user = await this.userTypeRepository.create({...createUserDto})
        for (const User of this.userRepository.create(createUserDto.user)) {
            User.userType = user
            const dbUser = await this.loginRepository.findOne({UserName: User.login.UserName})
            if (!dbUser) {
                await this.userRepository.save(User)

                const salt = randomBytes(8).toString("hex")
                const hash = (await scrypt(User.login.Password, salt, 32)) as Buffer

                const result = salt + "." + hash.toString("hex")

                const u = await this.loginRepository.create({
                    Id: User.login.Id,
                    UserName: User.login.UserName,
                    Email: User.login.Email,
                    Password: result,
                    Status: User.login.Status,
                    Count:0,
                    DeviceId: User.login.DeviceId
                })
                u.user = User
                return this.loginRepository.save(u)
            }
        }
    }

    async signin(loginDto: LoginDto) {
        const user = await this.loginRepository.findOne({UserName: loginDto.login.UserName})
        //console.log(user.Status)
        if (!user) {
            throw new NotFoundException("user not found")
        }
        if(user.Status!==1){
            throw new NotFoundException("status expired")
        }
        else {
            const [salt, storedHash] = user.Password.split(".")
            const hash = (await scrypt(loginDto.login.Password, salt, 32)) as Buffer
            if (hash.toString("hex") !== storedHash) {
                throw new BadRequestException("Bad password")
            } else {
                return user
            }
        }
    }

    async forget(forgetDto: ForgetDto) {
        console.log(forgetDto.otp)
        this.mailerService
            .sendMail({
                to: forgetDto.email, // list of receivers
                from: "CMC@notifier.com", // sender address
                subject: "OTP ✔", // Subject line
                text: "welcome" + forgetDto.otp, // plaintext body
                html: "<b>Here is your OTP " + forgetDto.otp + "</b>", // HTML body content
                attachments:[ {   // utf-8 string as an attachment
                    filename: 'text1.txt',
                    content: 'hello world!'
                }]
            })
            .then(() => {
            })
            .catch(() => {
            })
    }

//     if (!user) {
//     throw new NotFoundException('user not found');
// }
//
// const [salt, storedHash] = user.password.split('.');
//
// const hash = (await scrypt(password, salt, 32)) as Buffer;
//
// if (hash.toString('hex') !== storedHash) {
//     throw new BadRequestException('Bad password');
// }
//
// return user;


//reset
//   async update(email: string, attrs: Partial<User>) {
//     const userDB = await this.usersService.findOneEmail(email)
//
//     if (!userDB) {
//       throw new Error('User not found.');
//     }
//
//     const salt = randomBytes(8).toString('hex');
//     const hash = (await scrypt(attrs.password, salt, 32)) as Buffer;
//
//     const result = salt + '.' + hash.toString('hex');
//
//     return await this.usersService.update(userDB.email, {
//       email:attrs.email,
//       password: result
//     })
//
//   }

//}
}

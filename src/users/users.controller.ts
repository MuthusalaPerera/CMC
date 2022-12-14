import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  NotFoundException,
  UseGuards,
  Session,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { CurrentUser } from './decorators/current-user.decorator';
import { User } from './user.entity';
import {CustomerDto} from "../Customer/dtos/customer.dto"
import {LoginDto} from "./dtos/login.dto"
import {ForgetDto} from "./dtos/Forget.dto"

@Controller('auth')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  // @Serialize(UserDto)
  @Post('/signup')
  async createUser(@Body() body: CreateUserDto, @Session() session: any) {
    // const user = await this.authService.authService(body);
    // console.log(CustomerDto)
    return  await this.authService.signup(body)
  }

  // @Serialize(UserDto)
  @Post('/signin')
  async signin(@Body() body: LoginDto, @Session() session: any) {
    //const user = await this.authService.signin(body.email, body.password);
    return  await this.authService.signin(body)
  }

  @Post('/forgot')
  async forgot(@Body() body: ForgetDto) {
    //const user = await this.authService.signin(body.email, body.password);
    return  await this.authService.forget(body)
  }

  @Serialize(UserDto)
  @Get('/whoami')
  @UseGuards(AuthGuard)
  whoAmI(@CurrentUser() user: User) {
    return user;
  }

  @Post('/signout')
  signOut(@Session() session: any) {
    session.userId = null;
  }

  @Serialize(UserDto)
  @Get('/:id')
  findUser(@Param('id') id: string) {
    console.log('Handler is running');
    return this.usersService.findOne(parseInt(id));
  }

  // @Get()
  // findAllUsers(@Query('email') email: string) {
  //   return this.usersService.find(email);
  // }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(parseInt(id));
  }

  // @Patch('/:id')
  // updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
  //   return this.authService.update(id, body);
  // }

}

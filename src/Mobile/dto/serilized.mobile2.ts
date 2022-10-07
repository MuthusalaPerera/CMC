import { Exclude } from 'class-transformer';

export class UserResponse {
    id: number;

    username: string;

    @Exclude()
    roles: string;

    @Exclude()
    password: string;

    @Exclude()
    profileId: number;

    constructor(partial: Partial<UserResponse>) {
        Object.assign(this, partial);
    }
}

// import { Exclude, Type } from 'class-transformer';
// import { User } from 'src/_entities/user.entity';
// import { UserResponse } from './user.response';
//
// export class UsersResponse {
//
//     @Type(() => UserResponse)
//     users: User[]
//
//     constructor() { }
// }

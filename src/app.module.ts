import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceCallsModule } from './service-calls/service-calls.module';
import { UsersModule } from './users/users.module';
import entities from "./Entities/entities";
import { SparePartsModule } from './spare-parts/spare-parts.module';
import {MobileModule} from "./Mobile/mobile.module"
import {MailerModule} from "@nestjs-modules/mailer"
import UserType from "./IntialDB/UserRolls"

import { UserRoleTypesModule } from './user-role-types/user-role-types.module';
import { OriginTypesModule } from './origin-types/origin-types.module';
import { ProblemTypesModule } from './problem-types/problem-types.module';

import {MulterModule} from "@nestjs/platform-express"
import { resourceAllocationModule } from './ResourceAllocation/resourceAllocation.module';
import { ManageUserDetailsModule } from './manage-user-details/manage-user-details.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    MulterModule.register({dest:'./uploads123'}),
    MailerModule.forRoot({
      transport: {
        host:'smtp.gmail.com',
        auth:{
          user:'agriservice321@gmail.com',
          pass:'ngymrnlnwabtnksh'
        }
      }
    }),
    // TypeOrmModule.forRootAsync({
    //   inject: [ConfigService],
    //   useFactory: (config: ConfigService) => {
    //     return {
    //       type: 'mysql',
    //       host: 'localhost',
    //       port: 3306,
    //       database: config.get<string>('DB_NAME'),
    //       username: 'root',
    //       password: 'rootpassword',
    //       entities: [User, ServiceCall],
    //       synchronize: true,
    //     };
    //   },
    // }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'cmc',
      username: 'root',
      password: '1234',
      entities: entities,
      synchronize: true,
    }),
    ServiceCallsModule,
    SparePartsModule,
    UsersModule,
    MobileModule,
    UserRoleTypesModule,
    OriginTypesModule,
    ProblemTypesModule,
    resourceAllocationModule,
    ManageUserDetailsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

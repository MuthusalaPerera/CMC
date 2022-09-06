import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceCallsModule } from './service-calls/service-calls.module';
import { UsersModule } from './users/users.module';
import entities from "./Entities/entities";
import { SparePartsModule } from './spare-parts/spare-parts.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
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
      password: '12345',
      entities: entities,
      synchronize: true,
    }),
    ServiceCallsModule,
    SparePartsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

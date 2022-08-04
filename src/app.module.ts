import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceCallsModule } from './service-calls/service-calls.module';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { ServiceCall } from './service-calls/service-call.entity';
import { SparePartsModule } from './spare-parts/spare-parts.module';
import { SparePart } from './spare-parts/spare-part.entity';
//import { InventoryModule } from './inventory/inventory.module';
//import { inventory } from './inventory/inventory.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          database: config.get<string>('DB_NAME'),
          username: 'sqluser',
          password: 'password',
          entities: [User, ServiceCall, SparePart],
//InventoryModule, inventory

          synchronize: true,
        };
      },
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   database: 'cmc',
    //   username: 'root',
    //   password: 'rootpassword',
    //   entities: [User, ServiceCall],
    //   synchronize: true,
    // }),
    ServiceCallsModule,
    UsersModule,
    SparePartsModule,
    //InventoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

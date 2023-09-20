/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionConfiguration } from './common/data-source';
import { ConfigModule } from '@nestjs/config';
import { FAQModule } from './Modules/f-a-q/f-a-q.module';
import { ServicesModule } from './Modules/services/services.module';
import { BlogModule } from './Modules/blog/blog.module';
import { UserModule } from './Modules/user/user.module';
import { UserController } from './Modules/user/user.controller';
import { UserService } from './modules/user/user.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(ConnectionConfiguration),
    FAQModule,
    ServicesModule,
    BlogModule,
    UserModule,
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class AppModule { }

/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionConfiguration } from './common/data-source';
import { ConfigModule } from '@nestjs/config';
import { FAQModule } from './Modules/f-a-q/f-a-q.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(ConnectionConfiguration),
    FAQModule,
  ],
  controllers: [],
  providers: []
})
export class AppModule { }

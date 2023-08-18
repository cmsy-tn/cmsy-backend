/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionConfiguration } from './common/data-source';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(ConnectionConfiguration),
  ],
  controllers: [],
  providers: []
})
export class AppModule { }

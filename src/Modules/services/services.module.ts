import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';
import SERVICE_ENTITY from 'src/models/service.entity';
import FAQ_ENTITY from 'src/models/faq.entity';


@Module({
  imports: [TypeOrmModule.forFeature([SERVICE_ENTITY, FAQ_ENTITY])],
  controllers: [ServicesController],
  providers: [ServicesService]
})
export class ServicesModule { }

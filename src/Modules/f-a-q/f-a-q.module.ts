import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// CUSTOM IMPORTS
import { FAQController } from './f-a-q.controller';
import { FAQService } from './f-a-q.service';
import FAQ_ENTITY from 'src/models/faq.entity';


@Module({
    imports: [
        TypeOrmModule.forFeature([FAQ_ENTITY])
    ],
    providers: [FAQService],
    controllers: [FAQController]
})
export class FAQModule { }

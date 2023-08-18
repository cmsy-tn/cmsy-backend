/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CREATE_FAQ_DTO, UPDATE_FAQ_DTO } from './DTO/faq.dto';
import { FAQService } from './f-a-q.service';

@Controller('f-a-q')
export class FAQController {

    constructor(private faqService: FAQService) { }

    @Get()
    fetchAllFAQ() {
        return this.faqService.fetchAllFAQ();
    }

    @Post()
    createFAQ(@Body() payload: CREATE_FAQ_DTO) {
        return this.faqService.createFAQ(payload);
    }

    @Put(':id')
    updateFAQ(
        @Body() payload: UPDATE_FAQ_DTO,
        @Param() id: string
    ) {
        return this.faqService.updateFAQ(payload, id);
    }

    @Delete(':id')
    deleteFAQ(@Param() id: string) {
        return this.faqService.deleteFAQ(id);
    }
}

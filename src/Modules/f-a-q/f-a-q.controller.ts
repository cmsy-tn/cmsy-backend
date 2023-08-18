/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CREATE_FAQ_DTO, UPDATE_FAQ_DTO } from './DTO/faq.dto';

@Controller('f-a-q')
export class FAQController {

    @Get()
    fetchAllFAQ() {
        return [];
    }

    @Post()
    createFAQ(@Body() payload: CREATE_FAQ_DTO) {
        return null;
    }

    @Put(':id')
    updateFAQ(
        @Body() payload: UPDATE_FAQ_DTO,
        @Param() id: string
    ) {
        return null;
    }

    @Delete(':id')
    deleteFAQ(@Param() id: string) {
        return null;
    }
}

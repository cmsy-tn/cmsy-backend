/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('f-a-q')
export class FAQController {

    @Get()
    fetchAllFAQ() {
        return [];
    }

    @Post()
    createFAQ(@Body() payload: any) {
        return null;
    }

    @Put(':id')
    updateFAQ(
        @Body() payload: any,
        @Param() id: string
    ) {
        return null;
    }

    @Delete(':id')
    deleteFAQ(@Param() id: string) {
        return null;
    }
}

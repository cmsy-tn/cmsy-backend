import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ServicesService } from './services.service';

@Controller('services')
export class ServicesController {

    constructor(private servicesService: ServicesService) { }

    @Get()
    fetchAllFAQ() {
        return this.servicesService.fetchAllFAQ();
    }

    @Post()
    createFAQ(@Body() payload: any[]) {
        return this.servicesService.createFAQ(payload);
    }

    @Put(':id')
    updateFAQ(
        @Body() payload: any,
        @Param() id: string
    ) {
        return this.servicesService.updateFAQ(payload, id);
    }

    @Delete(':id')
    deleteFAQ(@Param() id: string) {
        return this.servicesService.deleteFAQ(id);
    }

}

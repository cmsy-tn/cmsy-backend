import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('services')
@ApiTags('services')
export class ServicesController {

    constructor(private servicesService: ServicesService) { }

    @Get()
    fetchAll() {
        return this.servicesService.fetchAll();
    }

    @Post()
    create(@Body() payload: any[]) {
        return this.servicesService.create(payload);
    }

    @Put(':id')
    update(
        @Body() payload: any,
        @Param() id: string
    ) {
        return this.servicesService.update(payload, id);
    }

    @Delete(':id')
    delete(@Param() id: string) {
        return this.servicesService.delete(id);
    }

}

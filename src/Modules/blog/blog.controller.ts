import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BlogService } from './blog.service';

@Controller('blog')
@ApiTags('BLOG')
export class BlogController {
    constructor(private blogService: BlogService) { }

    @Get()
    fetchAll() {
        return this.blogService.fetchAll();
    }

    @Post()
    create(@Body() payload: any[]) {
        return this.blogService.create(payload);
    }

    @Put(':id')
    update(
        @Body() payload: any,
        @Param() id: string
    ) {
        return this.blogService.update(payload, id);
    }

    @Delete(':id')
    delete(@Param() id: string) {
        return this.blogService.delete(id);
    }
}

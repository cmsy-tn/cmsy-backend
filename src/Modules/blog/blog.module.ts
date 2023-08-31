import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// CUSTOM IMPORTS
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import BLOGPOST from 'src/models/blogpost.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([BLOGPOST])
    ],
    providers: [BlogService],
    controllers: [BlogController]
})
export class BlogModule { }

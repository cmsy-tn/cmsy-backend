import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import BLOGPOST from 'src/models/blogpost.entity';

@Injectable()
export class BlogService {
    constructor(
        @InjectRepository(BLOGPOST) private blogRepo: Repository<BLOGPOST>
    ) { }

    fetchOne(id: string) {
        const BLOG_ID = id['id'].toString();
        return this.blogRepo.findOneBy({ id: BLOG_ID });
    }

    fetchAll() {
        return this.blogRepo.find();
    }

    create(payload: any[]) {
        const data = this.blogRepo.create({ ...payload });
        return this.blogRepo.save(data);
    }

    update(
        payload: any,
        id: string
    ) {
        const BLOG_ID = id['id'].toString();
        return this.blogRepo.update({ id: BLOG_ID }, { ...payload });
    }

    async delete(id: string) {
        const BLOG_ID = id['id'].toString();
        const data = await this.blogRepo.delete({ id: BLOG_ID });
        return data.affected;
    }
}

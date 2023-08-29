import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// CUSTOM IMPORTS
import FAQ_ENTITY from 'src/models/faq.entity';
import { CREATE_FAQ_DTO, UPDATE_FAQ_DTO } from './DTO/faq.dto';

@Injectable()
export class FAQService {

    constructor(
        @InjectRepository(FAQ_ENTITY) private faqRepo: Repository<FAQ_ENTITY>
    ) { }

    fetchAllFAQ() {
        return this.faqRepo.find();
    }

    createFAQ(payload: CREATE_FAQ_DTO) {
        const data = this.faqRepo.create({ ...payload });
        return this.faqRepo.save(data);
    }

    updateFAQ(
        payload: UPDATE_FAQ_DTO,
        id: string
    ) {
        const FAQ_ID = id['id'].toString();
        return this.faqRepo.update({ id: FAQ_ID }, { ...payload });
    }

    async deleteFAQ(id: string) {
        const FAQ_ID = id['id'].toString();
        const data = await this.faqRepo.delete({ id: FAQ_ID });
        return data.affected;
    }

}

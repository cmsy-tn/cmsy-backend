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

    createFAQ(payload: CREATE_FAQ_DTO[]) {
        payload.map((payload_saghrouna: CREATE_FAQ_DTO) => {
            const data = this.faqRepo.create({ ...payload_saghrouna });
            this.faqRepo.save(data);
        })
        return 1;
    }

    updateFAQ(
        payload: UPDATE_FAQ_DTO,
        id: string
    ) {
        return this.faqRepo.update({ id }, { ...payload });
    }

    deleteFAQ(id: string) {
        return this.faqRepo.delete({ id });
    }

}

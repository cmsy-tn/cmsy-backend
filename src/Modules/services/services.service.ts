import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import SERVICE_ENTITY from 'src/models/service.entity';

@Injectable()
export class ServicesService {
    constructor(
        @InjectRepository(SERVICE_ENTITY) private serviceRepo: Repository<SERVICE_ENTITY>
    ) { }

    fetchAll() {
        return this.serviceRepo.find();
    }

    create(payload: any[]) {
        const data = this.serviceRepo.create({ ...payload });
        return this.serviceRepo.save(data);
    }

    update(
        payload: any,
        id: string
    ) {
        const FAQ_ID = id['id'].toString();
        return this.serviceRepo.update({ id: FAQ_ID }, { ...payload });
    }

    async delete(id: string) {
        const FAQ_ID = id['id'].toString();
        const data = await this.serviceRepo.delete({ id: FAQ_ID });
        return data.affected;
    }
}

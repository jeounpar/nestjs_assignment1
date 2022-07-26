import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './entity/cat.entity';

@Injectable()
export class AppService {
    //레포지터리 패턴
    constructor(
        @InjectRepository(Cat) private readonly catRepository: Repository<Cat>,
    ) {}

    async update(name: string) {
        const found = await this.catRepository.findOne({ where: { name } });

        found.age = 100;

        await this.catRepository.save(found);
    }
    getHello(): string {
        return 'Hello World!';
    }
    CatServicedeleteCat(): boolean {
        return true;
    }
}

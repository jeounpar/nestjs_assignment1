import { Injectable } from '@nestjs/common';
import { Cat } from './cat.interface';

@Injectable()
export class CatService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(): Cat[] {
        return this.cats;
    }

    deleteByName(id: string) {
        const index = this.cats.findIndex((el) => el.name === id);
        if (index < 0) {
            console.log('Delete Fail');
            return false;
        }
        this.cats.splice(index, 1);
        console.log('Delete Success');
        return true;
    }

    putByQuery(id: string, age: number) {
        const index = this.cats.findIndex((el) => el.name === id);
        if (index < 0) {
            console.log('Put Fail');
            return false;
        }
        console.log(age);
        // Number로 형변환을 해주지 않으면 string으로 저장됨
        this.cats[index].age = age;
        console.log('Put Success');
        return true;
    }
}

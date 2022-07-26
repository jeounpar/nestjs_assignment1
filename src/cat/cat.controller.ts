import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { Dto } from './cat.interface';

@Controller('cat')
export class CatController {
    constructor(private readonly catService: CatService) {}

    @Get('/findall')
    findAll() {
        return this.catService.findAll();
    }

    @Post('/create')
    create(@Body() dto: Dto) {
        return this.catService.create(dto);
    }

    @Put('/put')
    putByQuery(@Query() querys) {
        if (!this.catService.putByQuery(querys.name, querys.age))
            return 'Query Not Found';
    }

    @Delete('/delete/:name')
    deleteByName(@Param() params) {
        if (!this.catService.deleteByName(params.name)) return 'Name Not Found';
    }
}

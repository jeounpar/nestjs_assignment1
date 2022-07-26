import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}
    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get('/hello1')
    getName(@Query('name') name: string) {
        return `hello1 anme: ${name}`;
    }

    @Get('/hello2/:id')
    findOne(@Param() params): string {
        console.log(params.id);
        return `hello2 id: ${params.id}`;
    }
}

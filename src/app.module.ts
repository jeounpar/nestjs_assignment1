import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatController } from './cat/cat.controller';
import { CatService } from './cat/cat.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Cat } from './entity/cat.entity';
import { AppService } from './app.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Cat]),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '1234',
            database: 'nestjs',
            entities: [User, Cat],
            synchronize: true,
        }),
    ],
    controllers: [AppController, CatController],
    providers: [AppService, CatService],
})
export class AppModule {}

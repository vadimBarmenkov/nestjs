import {Controller, Post, Body, Get, Put, Param, Delete} from '@nestjs/common';
import {BookDocument} from './schemas/book.schema';
import {BookService} from './book.service';
import {HydratedDocument, QueryWithHelpers} from 'mongoose';

import {IParamId} from './interfaces/param-id';
import {CreateBook} from './interfaces/dto/create-book';
import {UpdateBook} from './interfaces/dto/update-book';

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) {
    }

    @Post()
    public create(@Body() body: CreateBook): Promise<BookDocument> {
        return this.bookService.create(body);
    }

    @Get()
    public getAll(): Promise<BookDocument[]> {
        return this.bookService.getAll();
    }

    @Put(':id')
    public update(
        @Param() {id}: IParamId,
        @Body() body: UpdateBook,
    ): QueryWithHelpers<HydratedDocument<BookDocument, {}, {}> | null, HydratedDocument<BookDocument, {}, {}>, {}, BookDocument> {
        return this.bookService.update(id, body);
    }

    @Delete(':id')
    public delete(@Param() {id}: IParamId): QueryWithHelpers<HydratedDocument<BookDocument, {}, {}> | null, HydratedDocument<BookDocument, {}, {}>, {}, BookDocument> {
        return this.bookService.delete(id);
    }
}
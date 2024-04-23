import { Controller, Get, Post, Delete, Put } from '@nestjs/common';
import { BookService } from './book.service';

@Controller()
export class BooksController {
    constructor(private readonly bookService: BookService) {}

    @Post()
    createBook(book: any): Promise<any> {
        return this.bookService.createBook(book);
    }

    @Delete
    deleteBook(id: string): Promise<any> {
        return this.bookService.deleteBook(id);
    }

    @Get
    getBook(id: string): Promise<any> {
        return this.bookService.getBook(id);
    }

    @Get
    getBooks(): Promise<any> {
        return this.bookService.getBooks();
    }

    @Put
    updateBook(id: string, book: any): Promise<any> {
        return this.bookService.updateBook(id, book);
    }
}
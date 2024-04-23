import { Injectable } from '@nestjs/common';
import {BooksRepository} from "./book/BooksRepository";

@Injectable()
export class BookService extends BooksRepository{

    createBook(book: any): Promise<any> {
        return Promise.resolve(undefined);
    }

    deleteBook(id: string): Promise<any> {
        return Promise.resolve(undefined);
    }

    getBook(id: string): Promise<any> {
        return Promise.resolve(undefined);
    }

    getBooks(): Promise<any> {
        return Promise.resolve(undefined);
    }

    updateBook(id: string, book: any): Promise<any> {
        return Promise.resolve(undefined);
    }
}
import {Injectable} from '@nestjs/common';

import {Model, Connection, HydratedDocument, QueryWithHelpers} from 'mongoose';
import {InjectModel, InjectConnection} from '@nestjs/mongoose';
import {Book, BookDocument} from "./schemas/book.schema";
import {CreateBook} from './interfaces/dto/create-book';
import {UpdateBook} from './interfaces/dto/update-book';

@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name) private bookModel: Model<BookDocument>,
        @InjectConnection() private connection: Connection,
    ) {
    }

    public create(data: CreateBook): Promise<BookDocument> {
        const todo = new this.bookModel(data);

        return todo.save();
    }

    public getAll(): Promise<BookDocument[]> {
        return this.bookModel.find().exec();
    }

    public update(id: string, data: UpdateBook): QueryWithHelpers<HydratedDocument<BookDocument, {}, {}> | null, HydratedDocument<BookDocument, {}, {}>, {}, BookDocument> {
        return this.bookModel.findOneAndUpdate({_id: id}, data);
    }

    public delete(id: string): QueryWithHelpers<HydratedDocument<BookDocument, {}, {}> | null, HydratedDocument<BookDocument, {}, {}>, {}, BookDocument> {
        return this.bookModel.findOneAndRemove({_id: id});
    }
}
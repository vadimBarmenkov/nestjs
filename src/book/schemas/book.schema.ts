import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {BookInterface} from "../interfaces/book.interface";

export type BookDocument = Book & Document;

@Schema()
export class Book implements BookInterface {

    @Prop()
    author: string;

    @Prop()
    description: string;

    @Prop()
    favorite: boolean;

    @Prop()
    fileCover: string;

    @Prop()
    fileName: string;

    @Prop()
    id: number;

    @Prop()
    pagesCount: number;

    @Prop({ required: true })
    title: string;

}

export const BookSchema = SchemaFactory.createForClass(Book);
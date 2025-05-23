import mongoose, { Schema, Document } from "mongoose";

export interface BookDocument extends Document {
  id: string;
  title: string;
  author: string;
  isbn: string;
  available: boolean;
  borrowedBy: string | null;
}

const BookSchema = new Schema<BookDocument>({
  id: { type: String, required: true, unique: true },
  title: String,
  author: String,
  isbn: String,
  available: { type: Boolean, default: true },
  borrowedBy: { type: String, default: null },
});

export const BookModel = mongoose.model<BookDocument>("Book", BookSchema);

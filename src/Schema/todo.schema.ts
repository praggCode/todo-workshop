import { Schema, Document, model } from "mongoose"

export interface PostInterface extends Document {
    title: String;
    content: String;
    author: String;
    createdAt: Date;
}

const PostSchema = new Schema<PostInterface>({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
})

export const PostModel = model("post", PostSchema);
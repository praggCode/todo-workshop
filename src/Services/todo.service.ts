import { PostModel, PostInterface } from "../Schema/todo.schema"

export class ToDoService{
    async getPosts(){
        return await PostModel.find();
    }

    async getPostById(id: string) {
        return await PostModel.findById(id);
    }

    async createPost(data: Partial<PostInterface>) {
        return await PostModel.create(data);
    }

    async updatePost(id: string, data: Partial<PostInterface>) {
        return await PostModel.findByIdAndUpdate(id, data, { new: true });
    }

    async deletePost(id: string) {
        return await PostModel.findByIdAndDelete(id);
    }
}
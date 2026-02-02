import { ToDoService } from "../Services/todo.service";
import express from 'express'
import {Request, Response} from 'express'
export default class ToDoController {
    todoService = new ToDoService();
    app = express()


    getAllPosts = async (req: Request, res: Response) => {
        try {
            const posts = await this.todoService.getPosts();
            res.json(posts);
        } catch (error) {
            res.status(500).json({ message: "Error fetching posts", error });
        }
    }

    getPostById = async (req: Request, res: Response) => {
        try {
            const post = await this.todoService.getPostById(req.params.id as string);
            if (!post) {
                res.status(404).json({ message: "Post not found" });
                return;
            }
            res.json(post);
        } catch (error) {
            res.status(500).json({ message: "Error fetching post", error });
        }
    }

    createPost = async (req: Request, res: Response) => {
        try {
            const post = await this.todoService.createPost(req.body);
            res.status(201).json(post);
        } catch (error) {
            res.status(500).json({ message: "Error creating post", error });
        }
    }

    updatePost = async (req: Request, res: Response) => {
        try {
            const post = await this.todoService.updatePost(req.params.id as string, req.body);
            if (!post) {
                res.status(404).json({ message: "Post not found" });
                return;
            }
            res.json(post);
        } catch (error) {
            res.status(500).json({ message: "Error updating post", error });
        }
    }

    deletePost = async (req: Request, res: Response) => {
        try {
            const post = await this.todoService.deletePost(req.params.id as string);
            if (!post) {
                res.status(404).json({ message: "Post not found" });
                return;
            }
            res.json({ message: "Post deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: "Error deleting post", error });
        }
    }
}
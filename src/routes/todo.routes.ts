import { Router } from 'express';
import { Routes } from '../interfaces/routes.interface';
import ToDoController from '../controllers/todo.controller';

export class TodoRoute implements Routes {
    public path = '/posts';
    public router = Router();
    public todoController = new ToDoController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.todoController.getAllPosts);
        this.router.get(`${this.path}/:id`, this.todoController.getPostById);
        this.router.post(`${this.path}`, this.todoController.createPost);
        this.router.put(`${this.path}/:id`, this.todoController.updatePost);
        this.router.delete(`${this.path}/:id`, this.todoController.deletePost);
    }
}

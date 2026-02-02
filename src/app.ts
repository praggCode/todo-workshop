import express from 'express'
import mongoose from 'mongoose';
import { Routes } from './interfaces/routes.interface'
import dotenv from 'dotenv'

dotenv.config()

interface App_Interface{
    startServer():void;
    connectDatabase():void;
    initializeRoutes(routes: Routes[]): void;

}
export default class App implements App_Interface{
    Port:number|string;
    app:express.Application

    constructor(routes: Routes[]) {
        this.Port = process.env.PORT || 4000
        this.app = express()
        this.connectDatabase()
        this.initializeMiddlewares()
        this.initializeRoutes(routes)
        this.startServer()
    }

    startServer():void{
        this.app.listen(this.Port,() => {
            console.log(`server is running on port ${this.Port}`)
        })
    };
    async connectDatabase():Promise<void>{
        try {
            if (!process.env.MONGODB_URI) {
                throw new Error('MONGODB_URI is not defined in environment variables')
            }
            await mongoose.connect(process.env.MONGODB_URI)
            console.log('database connected')
        }
        catch(err){
            console.log(err)
        }
    };

    initializeMiddlewares(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    initializeRoutes(routes: Routes[]): void {
        routes.forEach(route => {
            this.app.use('/', route.router);
        });
    };
}

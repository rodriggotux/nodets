import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes/users.route';


export class App {
    private express: express.Application;
    private port = 9000;

    constructor() {
        this.express = express();
        this.database();
        this.middlewares();
        this.routes();
        this.listen();
    }

    public getApp(): express.Application {
        return this.express;
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
    }

    private listen():void {
        this.express.listen(this.port, () => {
            console.log(`servidor rodando em: http://localhost:${this.port}`);
        });
    }

    private database(): void {
        mongoose.connect('mongodb_srv://rodriggo:rodrigo93@cluster0.t5yytjw.mongodb.net/?retryWrites=true&w=majority', {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    }

    private routes(): void {
        this.express.use('/users', router);
    }
}

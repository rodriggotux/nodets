import { Request, Response } from "express";
import usersModel from "../models/users.model";

class UserController {

    public async cadastrar(req: Request, res: Response): Promise<Response> {
        const users = await usersModel.create(req.body);
        return res.json(users);
    }
}

export default new UserController();

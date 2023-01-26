import { Router } from "express";
import usersController from "../controllers/users.controller";

const router = Router();

router.post('/cadastro', usersController.cadastrar);



export default router;

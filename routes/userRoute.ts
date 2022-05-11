import { Router } from 'express';
import UserController from '../controller/userController'

const user = new UserController();

const router = Router();

router.get('/', user.getAll);


export default router; 
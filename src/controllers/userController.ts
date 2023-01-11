import express, { Router } from 'express';

import { validateSchema, userSchema } from '../utils';
import {
    getUserByIdHandler,
    getUsersByQueryHandler,
    findUserByIdMiddleware,
    validateLoginCredential,
    createUserHandler,
    updateUserHandler,
    deleteUserHandler,
    userToBeValidatedOnCreation,
    userToBeValidatedOnUpdate
} from './userMiddleware';

export const userRouter: Router = express.Router();

userRouter.get('/:id', findUserByIdMiddleware, getUserByIdHandler);
userRouter.get('/', getUsersByQueryHandler);
userRouter.post(
    '/',
    userToBeValidatedOnCreation,
    validateSchema(userSchema),
    createUserHandler
);
userRouter.patch(
    '/:id',
    findUserByIdMiddleware,
    validateLoginCredential,
    userToBeValidatedOnUpdate,
    validateSchema(userSchema),
    updateUserHandler
);
userRouter.delete('/:id', findUserByIdMiddleware, deleteUserHandler);

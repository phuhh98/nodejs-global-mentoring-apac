import express from 'express';

import { validateSchema } from '../utils/validate';
import { userSchema } from '../utils/schemas';
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

const router = express.Router();

router.get('/:id', findUserByIdMiddleware, getUserByIdHandler);
router.get('/', getUsersByQueryHandler);
router.post(
    '/',
    userToBeValidatedOnCreation,
    validateSchema(userSchema),
    createUserHandler
);
router.patch(
    '/:id',
    findUserByIdMiddleware,
    validateLoginCredential,
    userToBeValidatedOnUpdate,
    validateSchema(userSchema),
    updateUserHandler
);
router.delete('/:id', findUserByIdMiddleware, deleteUserHandler);

export default router;

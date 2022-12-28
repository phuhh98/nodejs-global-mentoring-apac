const express = require('express');

const { validateSchema } = require('../utils/validate');
const { userSchema } = require('../utils/schemas');
const {
    getUserByIdHandler,
    getUsersByQueryHandler,
    findUserByIdMiddleware,
    validateLoginCredential,
    createUserHandler,
    updateUserHandler,
    deleteUserHandler,
    userToBeValidatedOnCreation,
    userToBeValidatedOnUpdate
} = require('./userMiddlewares');

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

module.exports = router;

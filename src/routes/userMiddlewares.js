const { v4: uuidv4 } = require('uuid');
const userService = require('../services/userServices');
const Users = userService.getInstance();

function getUserByIdHandler(req, res) {
    const { user } = res.locals;
    res.status(200).json(user);
}

function getUsersByQueryHandler(req, res) {
    const { limit, loginSubstring } = req.query;
    const limitedUserList = Users.getAutoSuggestUsers(loginSubstring, limit);
    console.log(limitedUserList);
    res.status(200).json(limitedUserList);
}

function createUserHandler(req, res, next) {
    const user = { id: uuidv4(), ...req.body, isDeleted: false };

    const result = Users.addUser(user);
    if (!(result instanceof Error)) {
        res.status(200).send(result);
    }
    next({ status: 400, message: result.message });
}

function updateUserHandler(req, res, next) {
    const { user } = res.locals;
    const { update: updateDetails } = req.body;
    const result = Users.updateUserById(user.id, updateDetails);
    if (!(result instanceof Error)) {
        res.status(200).send(result);
    }
    next({ status: 400, message: result.message });
}

function deleteUserHandler(req, res, next) {
    const { user } = res.locals;
    const result = Users.markAsDeletedById(user.id);
    if (!(result instanceof Error)) {
        res.status(200).send('user deleted');
    }
    next({ status: 400, message: result.message });
}

function findUserByIdMiddleware(req, res, next) {
    const { id: userId } = req.params;
    const user = Users.findUserById(userId);
    if (!user) {
        res.status(400).send('user does not exist');
    }
    res.locals.user = user;
    next();
}

function validateLoginCredential(req, res, next) {
    const { user } = res.locals;
    const { credential: reqCredential } = req.body;

    if (!reqCredential) {
        return next({ status: 400, message: 'Login credential is required' });
    }
    if (
        user.login === reqCredential.login &&
        user.password === reqCredential.password
    ) {
        return next();
    }
    next({ status: 400, message: 'Invalid login or password' });
}

function userToBeValidatedOnCreation(req, res, next) {
    res.locals.toBeValidated = req.body;
    next();
}

function userToBeValidatedOnUpdate(req, res, next) {
    const { user } = res.locals;
    const { update: updateDetails } = req.body;
    res.locals.toBeValidated = { ...user, ...updateDetails };
    next();
}

module.exports = {
    getUserByIdHandler,
    getUsersByQueryHandler,
    createUserHandler,
    updateUserHandler,
    deleteUserHandler,
    findUserByIdMiddleware,
    validateLoginCredential,
    userToBeValidatedOnCreation,
    userToBeValidatedOnUpdate
};

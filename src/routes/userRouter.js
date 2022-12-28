const express = require('express');

const { v4: uuidv4 } = require('uuid');

const userService = require('../services/userServices');

const router = express.Router();
const Users = userService.getInstance();

router.get('/:id', findUserByIdMiddleware, (req, res, next) => {
    const { user } = res.locals;
    res.status(200).json(user);
});

router.get('/', (req, res, next) => {
    const { limit, loginSubstring } = req.query;
    const limitedUserList = Users.getAutoSuggestUsers(loginSubstring, limit);
    console.log(limitedUserList);
    res.status(200).json(limitedUserList);
});

router.post('/', (req, res, next) => {
    const user = { id: uuidv4(), ...req.body, isDeleted: false };

    const result = Users.addUser(user);
    if (result instanceof Error) {
        next({ status: 400, message: result.message });
    } else {
        res.status(200).send(result);
    }
    console.log('Users store:', Users.getStore());
});

router.patch('/:id', findUserByIdMiddleware, (req, res, next) => {
    const { user } = res.locals;
    const updateDetails = req.body;
    const result = Users.updateUserById(user.id, updateDetails);
    if (result instanceof Error) {
        next({ status: 400, message: result.message });
    } else {
        res.status(200).send(result);
    }
});

router.delete('/:id', findUserByIdMiddleware, (req, res, next) => {
    const { user } = res.locals;
    const result = Users.markAsDeletedById(user.id);
    if (result instanceof Error) {
        next({ status: 400, message: result.message });
    } else {
        res.status(200).send('user deleted');
    }
});

function findUserByIdMiddleware(req, res, next) {
    const { id: userId } = req.params;
    const user = Users.findUserById(userId);
    if (!user) {
        res.status(400).send('user does not exist');
    } else {
        res.locals.user = user;
        next();
    }
}

module.exports = router;

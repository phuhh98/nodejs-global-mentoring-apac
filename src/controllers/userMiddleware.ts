import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import userService from '../services/userServices';
const Users = userService.getInstance();

export const getUserByIdHandler = (req: Request, res: Response) => {
    const { user } = res.locals;
    res.status(200).json(user);
};

export const getUsersByQueryHandler = (req: Request, res: Response) => {
    const { limit, loginSubstring } = req.query;
    const limitedUserList = Users.getAutoSuggestUsers(
        loginSubstring as string,
        parseInt(limit as string, 10)
    );
    res.status(200).json(limitedUserList);
};

export const createUserHandler = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const user = { id: uuidv4(), ...req.body, isDeleted: false };

    const result = Users.addUser(user);
    if (result instanceof Error) {
        return next({ status: 400, message: result.message });
    }
    res.status(200).send(result);
};

export const updateUserHandler = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { user } = res.locals;
    const { update: updateDetails } = req.body;
    const result = Users.updateUserById(user.id, updateDetails);
    if (result instanceof Error) {
        return next({ status: 400, message: result.message });
    }
    res.status(200).send(result);
};

export const deleteUserHandler = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { user } = res.locals;
    const result = Users.markAsDeletedById(user.id);
    if (result instanceof Error) {
        return next({ status: 400, message: result.message });
    }
    res.status(200).send('user deleted');
};

export const findUserByIdMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { id: userId } = req.params;
    const user = Users.findUserById(userId);
    if (!user) {
        res.status(400).send('user does not exist');
    }
    res.locals.user = user;
    next();
};

export const validateLoginCredential = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
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
};

export const userToBeValidatedOnCreation = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.locals.toBeValidated = req.body;
    next();
};

export const userToBeValidatedOnUpdate = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { user } = res.locals;
    const { update: updateDetails } = req.body;
    res.locals.toBeValidated = { ...user, ...updateDetails };
    next();
};

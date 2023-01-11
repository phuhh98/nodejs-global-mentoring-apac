import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { UserService } from '../services';
const Users = UserService.getInstance();

export const getUserByIdHandler = (req: Request, res: Response) => {
    const { user } = res.locals;
    res.status(200).json(user);
};

export const getUsersByQueryHandler = async (req: Request, res: Response) => {
    let { limit, loginSubstring } = req.query;
    const limitedUserList = await Users.getAutoSuggestUsers(
        loginSubstring as string,
        !!parseInt(limit as string, 10) ? parseInt(limit as string, 10) : 5
    );
    res.status(200).json(limitedUserList);
};

export const createUserHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const user = { id: uuidv4(), ...req.body, isDeleted: false };

    const result = await Users.addUser(user);
    if (result instanceof Error) {
        return next({ status: 400, message: result.message });
    }
    res.status(200).send(result);
};

export const updateUserHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { user } = res.locals;
    const { update: updateDetails } = req.body;
    const result = await Users.updateUserById(user.id, updateDetails);
    if (result instanceof Error) {
        return next({ status: 400, message: result.message });
    }
    res.status(200).send(result);
};

export const deleteUserHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { user } = res.locals;
    const result = await Users.markAsDeletedById(user.id);
    if (result instanceof Error) {
        return next({ status: 400, message: result.message });
    }
    res.status(200).send('user deleted');
};

export const findUserByIdMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { id: userId } = req.params;
    const user = await Users.findUserById(userId);
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

import { Request, Response, NextFunction } from 'express';
import { Schema, ValidationErrorItem } from 'joi';

export const errorResponse = (schemaErrors: Array<ValidationErrorItem>) => {
    const errors = schemaErrors.map(({ path, message }) => {
        return { path, message };
    });

    return {
        status: 'Failed',
        errors
    };
};

export const validateSchema = (schema: Schema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { toBeValidated } = res.locals;
        const { error } = schema.validate(toBeValidated, {
            abortEarly: true,
            allowUnknown: false
        });

        if (error && error.isJoi) {
            return res.status(400).json(errorResponse(error.details));
        }

        next();
    };
};

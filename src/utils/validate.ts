export const errorResponse = schemaErrors => {
    const errors = schemaErrors.map(({ path, message }) => {
        return { path, message };
    });

    return {
        status: 'Failed',
        errors
    };
};

export const validateSchema = schema => {
    return (req, res, next) => {
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

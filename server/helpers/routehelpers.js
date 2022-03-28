const Joi = require("joi");

module.exports = {
    validateBody: (schema) => 
    {
        return (req, res, next) => 
        {
            var result = schema.validate(req.body);

            if(result.error)
            {
                res.status(400).json(result.error);
            }
            console.log("validation passed on server");
            next();
        }
    },

    schemas: {
        authSchema: Joi.object({
            email: Joi
                .string()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
                .required(),
            password: Joi
                .string()
                .min(7)
                .max(25)
                .required()
        }),
    }
}
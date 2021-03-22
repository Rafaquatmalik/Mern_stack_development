const Joi = require('joi');
const s_schema={
    student: Joi.object({
        name: Joi.string()
        .required()
        .max(100), 
        gender: Joi.string()
        .valid("M","F","O")
        .required(),
        city: Joi.string()
        .required()
        .max(100),
        age: Joi.number()
        .integer()
        .required()
        .max(100)
        .message("Not Possible Invalid!!")
    })
};

module.exports=s_schema;
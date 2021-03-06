const Joi = require("joi");

exports.validation = Joi.object({
  name: Joi.string().min(3).max(20).required(),

  email: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .required(),

  phone: Joi.string().required(),

  subscription: Joi.string(),

  password: Joi.string().required(),

  token: Joi.string().optional().allow(null).allow("").empty(""),
});

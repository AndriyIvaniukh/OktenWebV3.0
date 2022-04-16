import Joi from "joi";


const carValidator = Joi.object(
    {
        model: Joi.string().min(1).max(20).required().messages({
            'string.empty': 'Model не може бути пустим',
            'string.min': 'Model не може містити менше 1 символу',
            'string.max': 'Model не може містити більше 20 символів'
        }),
        price: Joi.number().min(0).max(1000000).required().messages({
            'number.min': 'price не може бути менше 0',
            'number.max': 'Price не може бути більшим 1000000'
        }),
        year: Joi.number().min(1990).max(2022).required().messages({
            'number.min': 'Year не може бути мекншим 1990',
            'number.max': `Year не може бути більшим ${new Date().getFullYear()}`
        })

    }
)

export {carValidator};
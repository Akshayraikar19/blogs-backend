const User = require("../models/user-model")

const userRegisterValidationSchema = {
    username: {
        in: ['body'],
        exists: {
            errorMessage: 'username is required'
        },
        notEmpty: {
            errorMessage: 'username is required'
        },
        trim: true
    },
    email: {
        in: ['body'],
        exists: {
            errorMessage: "email is required"
        },
        notEmpty: {
            errorMessage: 'email is required'
        },
        isEmail: {
            errorMessage: 'email should be a valid format'
        },
        custom: {
            options: async function(value) {
                const user = await User.findOne({ email: value}) // check in user model
                if(user) {
                    throw new Error('email already taken')
                } else {
                    return true 
                }
            }
        },
        trim: true,   // trim, normalize is sanitailzer, normailze is used to make all letters is small letter.
        normalizeEmail: true 
    },
    password: {
        in: ['body'],
        exists: {
            errorMessage: 'password is required'
        },
        notEmpty: {
            errorMessage: 'password cannot be empty'
        },
        isLength: {
            options: {min: 8, max: 128},
            errorMessage: 'password should be between 8 - 128 characters'
        },
        trim: true 
    },
    bio: {
        in: ['body'],
        exists: {
            errorMessage: 'bio is required'
        },
        notEmpty: {
            errorMessage: 'bio cannot be empty'
        },
        trim: true      
    },
    profilepicture: {
        in: ['body'],
        exists: {
            errorMessage: 'profilepicture is required'
        },
        notEmpty: {
            errorMessage: 'profile cannot be empty '
        },
        trim: true      
    }
}

module.exports = userRegisterValidationSchema
               
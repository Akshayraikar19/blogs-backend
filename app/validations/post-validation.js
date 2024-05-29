const Post = require("../models/post-model")

const postValidationSchema = {
    title: {
        in: ['body'],
        exists: {
            errorMessage: 'title is required'
        },
        notEmpty: {
            errorMessage: 'title is required'
        },
        trim: true
    },
    content: {
        in: ['body'],
        exists: {
            errorMessage: 'content is required'
        },
        notEmpty: {
            errorMessage: 'content is required'
        },
        trim: true,   // trim, normalize is sanitailzer, normailze is used to make all letters is small letter.
    },
   
   
}

const idValidationSchema = {
    id:{
        in:['params'], //req.params.id.
        isMongoId: {
            errorMessage: 'should be a valid mongodb id'
        }
    }
}    

module.exports = {postValidationSchema, idValidationSchema}
               
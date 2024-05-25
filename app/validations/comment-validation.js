const Comment = require('../models/comment-model')

const commentValidationSchema = {
    content: {
        in: ['body'],
        exists: {
            errorMessage: 'content is required'
        },
        trim: true,
        notEmpty: {
            errorMessage: 'content cannot be empty'
        },
        
    },
    post:{
        in:['params'],
        custom: {
            options: async function( value,{ req }){
                const comment = await Comment.findOne({ post: req.params.postId, author: req.user.id }) //ensuring that a single comment is posted by user.
                if(comment) {
                    throw new Error('You have already commented this post')
                }
                return true 
            }
        }
    }
 }

 const commentEditValidationSchema = {
    content : {
        in: ['body'],
        exists: {
            errorMessage: "content is required"
        },
        notEmpty: {
            errorMessage: "content cannot be empty"
        },
        trim: true

    }
}

     



module.exports = {commentValidationSchema, commentEditValidationSchema}
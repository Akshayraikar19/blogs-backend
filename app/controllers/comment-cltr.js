const Comment = require('../models/comment-model')
const Post = require('../models/post-model')
const { validationResult } = require('express-validator')
const commentCltr = {}


commentCltr.create = async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array()})
    }
    try{
        const body = req.body
        const postId = req.params.postId // we are commenting the post based on id, in jobportal we were applying by passing jobId in body
        const comment = new Comment(body)
        comment.author = req.user.id  // when ever we are saving in db we have to assign the user and then save in db
        comment.post = postId  // 
        await comment.save() 
        const updatedPost = await Post.findByIdAndUpdate(postId, {$push: {comment:comment._id}}, {new: true});
        if(!updatedPost) {
            return res.status(404).json({error: 'Post not found'})
        }
        res.status(200).json(comment)
    } catch(err) {
        console.log(err) 
        res.status(500).json({ error: 'something went wrong'})
    }
 }

 commentCltr.comments = async (req, res) => {
    try{
    const postId = req.params.postId
    const comment = await Comment.find({post:postId})
    if(!comment){
        return res.status(404).json({})
    }
    res.status(200).json(comment)
 }catch(err) {
    console.log(err)
    res.status(500).json({ error: 'something went wrong'})
}
 }

 commentCltr.update = async(req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array()})
    }
    try{
        const postId = req.params.postId
        const commentId = req.params.commentId
        const body = req.body
        const comment = await Comment.findOneAndUpdate({post:postId, _id:commentId}, body, {new:true})
        if(!comment) {
            return res.status(404).json({errors: 'record not found'})
        }
        res.status(200).json(comment)
    } catch(err) {
        res.status(500).json({errors: 'something went wrong'})
    }
 }

 commentCltr.remove = async(req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    try{
        const postId = req.params.postId
        const commentId = req.params.commentId
        const comment = await Comment.findOneAndDelete({post:postId, _id:commentId})
        if(!comment) {
            return res.status(404).json({errors: 'record not found'})
        }
        await Post.findByIdAndUpdate(postId, {$pull: {comment: commentId}});

        res.status(200).json({msg: 'Deleted successfully!!'})
    } catch(err) {
        res.status(500).json({errors: 'something went wrong'})
    }
 }


module.exports = commentCltr
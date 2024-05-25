const Post = require('../models/post-model')
const{ validationResult } = require('express-validator')
const postCltr = {}


postCltr.create = async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array()})
    }
    try{
        const body = req.body
        const post = new Post(body)
        post.author = req.user.id  // we are assigning the post for that author.
        await post.save()
        console.log(post)
        res.status(200).json(post)
    } catch(err) {
        console.log(err) 
        res.status(500).json({ error: 'something went wrong'})
    }
}

postCltr.allPost = async (req, res) => {
    try { 
        const post = await Post.find() 
        res.json(post)
    } catch(err) {  
        console.log(err) 
        res.status(500).json({ error: 'something went wrong'})
    }
} 

postCltr.single = async (req, res) => {
    try{
        const id = req.params.id
        const post = await Post.findById(id)// finding a single post based on id
        res.status(200).json(post)
    } catch(err) {
        console.log(err)
        res.status(500).json({ error: 'something went wrong'})
    }
}

postCltr.update = async(req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array()})
    }
    try{
        const id = req.params.id
        const body = req.body
        const post = await Post.findOneAndUpdate({author: req.user.id, _id:id} ,body,{new: true})
        if(!post){
            return res.status(404).json({})
        }
        res.status(200).json(post)
    }catch(err) {
        console.log(err)
        res.status(500).json({ error: 'something went wrong'})
    }
}

postCltr.remove = async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array()})
    }
    try{
        const id = req.params.id
        const post = await Post.findOneAndDelete({author: req.user.id, _id:id})
        if(!post){
            return res.status(404).json({})
        }
        res.status(200).json(post)
    }catch(err) {
        console.log(err)
        res.status(500).json({ error: 'something went wrong'})
    }
}

postCltr.myPosts = async(req, res) => {
    try { 
        const post = await Post.find({ author: req.user.id })
        res.json(post) 
    } catch(err) {
        console.log(err) 
        res.status(500).json({ error: 'something went wrong'})
    }
}


module.exports = postCltr  
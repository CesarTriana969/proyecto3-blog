const postServices = require('./posts.services')

const router = require('express').Router()

router.get('/posts', postServices.getAllPosts)

router.post('/posts', postServices.postNewPost)

router.get('/posts/:id', postServices.getPostById)

router.patch('/posts/:id', postServices.patchPost)

router.put('/posts/:id', postServices.putPost)

router.delete('/posts/:id', postServices.deletePost)

module.exports = router
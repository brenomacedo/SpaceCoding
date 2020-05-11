const express = require('express')
const router = express.Router()
const { postCreate, postRead } = require('./controllers/postController')
const { createUser, getUser } = require('./controllers/userController')
const { createComment, getComment } = require('./controllers/commentController')

router.post('/posts', postCreate)
router.get('/posts', postRead)
router.post('/user', createUser)
router.get('/user', getUser)
router.post('/comment', createComment)
router.get('/comment', getComment)

module.exports = router
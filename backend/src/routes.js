const express = require('express')
const auth = require('../middlewares/auth')
const router = express.Router()
const { postCreate, postRead } = require('./controllers/postController')
const { createUser, getUser } = require('./controllers/userController')
const { createComment, getComment } = require('./controllers/commentController')
const { tokenId, tokenUser } = require('./controllers/tokenController')

router.post('/posts', auth, postCreate)
router.get('/posts', postRead)
router.post('/user', createUser)
router.get('/user', getUser)
router.post('/comment', auth, createComment)
router.get('/comment', getComment)
router.get('/tokenUser', auth, tokenUser)
router.get('/token', auth, tokenId)

module.exports = router
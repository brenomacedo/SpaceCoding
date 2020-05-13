const express = require('express')
const auth = require('../middlewares/auth')
const router = express.Router()
const { postCreate, postRead } = require('./controllers/postController')
const { createUser, getUser } = require('./controllers/userController')
const { createComment, getComment } = require('./controllers/commentController')

router.post('/posts', auth, postCreate)
router.get('/posts', postRead)
router.post('/user', createUser)
router.get('/user', getUser)
router.post('/comment', auth, createComment)
router.get('/comment', getComment)
router.get('/test', auth, (req, res) => {
    return res.json({ deu: 'certo' })
})

module.exports = router
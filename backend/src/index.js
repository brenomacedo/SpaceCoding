const express = require('express')
const app = express()
const cors = require('cors')
const knex = require('../config/db')
const router = require('./routes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({ origin: true }))
app.use(router)


app.listen(3003)
const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({ origin: true }))

app.post('/' ,(req, res) => {
    res.json({
        legal: req.body.teste
    })
})

app.listen(3003)
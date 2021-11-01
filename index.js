const express = require('express')
const morgan = require('morgan')
const nodemon = require('nodemon')
const routes = require('./config/routes/routes')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(routes)

app.listen(21262, () => {
    console.log(`Express started at http://localhost:21262`)
})
const express = require('express')
const path = require('path')

const tailRoutes = require('./routes/tails')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/tails', tailRoutes)

module.exports = server

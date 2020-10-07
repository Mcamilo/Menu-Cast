require('dotenv').config()
const express = require('express')
const cors = require('cors')
var cookieParser = require('cookie-parser');

const routes = require('./routes')
const port = 8888
const server = express()

server.use(express.static(__dirname + '/public'))
server.use(cors())
server.use(cookieParser())
// set json for requests
server.use(express.json())
// set routes for requests
server.use(routes)
console.log(`Listening on port: ${port}`);

// set port
server.listen(process.env.PORT || port)

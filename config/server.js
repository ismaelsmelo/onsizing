const port = 3000

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

//Ouve uma porta específica p/ estabelecer a conexão
server.listen(port, function() {
  console.log('Backend está rodando na porta ${port}.')
})

module.exports = server

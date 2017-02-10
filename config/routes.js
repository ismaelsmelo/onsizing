const express = require('express')

module.exports = function(server) {

  // API routes
  const router = express.Router()
  server.use('/api', router)

  //Teste
  //router.route('/teste').get(function(req, res, next) {
  //  res.send('Funcionou')
  //})

  //Rotas da APT: Rota de 'Projeto'
  const auditoria = require('../api/service/auditoria')
  auditoria.register(router, '/auditoria')
}

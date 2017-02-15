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

  const empresaCliente = require('../api/service/empresaCliente')
  empresaCliente.register(router, '/empresaCliente')

  const empresaMetricas = require('../api/service/empresaMetricas')
  empresaMetricas.register(router, '/empresaMetricas')

  const leanMVP = require('../api/service/leanMVP')
  leanMVP.register(router, '/leanMVP')

  const prospecto = require('../api/service/prospecto')
  prospecto.register(router, '/prospecto')

  const requisicao = require('../api/service/requisicao')
  requisicao.register(router, '/requisicao')

  const transacao = require('../api/service/transacao')
  transacao.register(router, '/transacao')

  const usuario = require('../api/service/usuario')
  usuario.register(router, '/usuario')
}

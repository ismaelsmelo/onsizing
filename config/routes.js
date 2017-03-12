const express = require('express')

module.exports = function(server) {

  //Mapeando a API routes
  const router = express.Router()
  server.use('/api', router)
  //Rota da APT: Rota de 'Auditoria'
  const aplicacao = require('../api/service/aplicacao')
  aplicacao.register(router, '/aplicacao')

  //Rota da APT: Rota de 'Auditoria'
  const auditoria = require('../api/service/auditoria')
  auditoria.register(router, '/auditoria')

  //Rota da APT: Rota de 'Bloco'
  const bloco = require('../api/service/bloco')
  bloco.register(router, '/bloco')

  //Rota da APT: Rota de 'Contagem Item'
  const contagemItem = require('../api/service/contagemItem')
  contagemItem.register(router, '/contagemItem')

  //Rota da APT: Rota de 'Contato'
  const contato = require('../api/service/contato')
  contato.register(router, '/contato')

  //Rota da APT: Rota de 'Empresa Cliente'
  const empresaCliente = require('../api/service/empresaCliente')
  empresaCliente.register(router, '/empresaCliente')

  //Rota da APT: Rota de 'Empresa de Métricas'
  const empresaMetricas = require('../api/service/empresaMetricas')
  empresaMetricas.register(router, '/empresaMetricas')

  //Rota da APT: Rota de 'Entrega'
  const entrega = require('../api/service/entrega')
  entrega.register(router, '/entrega')

  //Rota da APT: Rota de 'Feature'
  const feature = require('../api/service/feature')
  feature.register(router, '/feature')

  //Rota da APT: Rota de 'Fornecedor'
  const fornecedor = require('../api/service/fornecedor')
  fornecedor.register(router, '/fornecedor')

  //Rota da APT: Rota de 'Fronteira'
  const fronteira = require('../api/service/fronteira')
  fronteira.register(router, '/fronteira')

  //Rota da APT: Rota de 'Iteração'
  const iteracao = require('../api/service/iteracao')
  iteracao.register(router, '/iteracao')

  //Rota da APT: Rota de 'Lançamento'
  const lancamento = require('../api/service/lancamento')
  lancamento.register(router, '/lancamento')

  //Rota da APT: Rota de 'Modelo de Métricas'
  const modeloMetricas = require('../api/service/modeloMetricas')
  modeloMetricas.register(router, '/modeloMetricas')

  //Rota da APT: Rota de 'Município'
  const municipio = require('../api/service/municipio')
  municipio.register(router, '/municipio')

  //Rota da APT: Rota de 'Operação'
  const operacao = require('../api/service/operacao')
  operacao.register(router, '/operacao')

  //Rota da APT: Rota de 'Plataforma'
  const plataforma = require('../api/service/plataforma')
  plataforma.register(router, '/plataforma')

  //Rota da APT: Rota de 'Projeto'
  const projeto = require('../api/service/projeto')
  projeto.register(router, '/projeto')

  //Rota da APT: Rota de 'Prospecto'
  const prospecto = require('../api/service/prospecto')
  prospecto.register(router, '/prospecto')

  //Rota da APT: Rota de 'Requisição'
  const requisicao = require('../api/service/requisicao')
  requisicao.register(router, '/requisicao')

  //Rota da APT: Setor da Economia'
  const setorEconomia = require('../api/service/setorEconomia')
  setorEconomia.register(router, '/setorEconomia')

  //Rota da APT: Tecnologia'
  const tecnologia = require('../api/service/tecnologia')
  tecnologia.register(router, '/tecnologia')

  //Rota da APT: Rota de 'Time'
  const time = require('../api/service/time')
  time.register(router, '/time')

  //Rota da APT: Rota de 'Tipo Aplicação'
  const tipoAplicacao = require('../api/service/tipoAplicacao')
  tipoAplicacao.register(router, '/tipoAplicacao')

  //Rota da APT: Rota de 'Transação'
  const transacao = require('../api/service/transacao')
  transacao.register(router, '/transacao')

  //Rota da APT: Rota de 'Usuário'
  const usuario = require('../api/service/usuario')
  usuario.register(router, '/usuario')
}

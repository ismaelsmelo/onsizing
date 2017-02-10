const restful = require('node-restful')
const mongoose = restful.mongoose

const Auditoria_Schema = new mongoose.Schema( {
  id_usuario: { type: String, required: [ true, 'Informe o código do usuário.' ] }, //id do usuário logado
  ts_acesso: { type: String }, //data e hora do acesso
  id_funcionalidade: { type: String }, //funcionalidade da contagem
  id_pagina: { type: String }, //caso tenha tela, informar qual
  id_servico: { type: String }, //caso seja serviço
  ds_imagemAntes: { type: String }, //caso necessário, informar
  ds_imagemDepois: { type: String } //caso necessário, informar
})

module.exports = restful.model('Auditoria', Auditoria_Schema)

//também será gravado log de consultas

const restful = require('node-restful')
const mongoose = restful.mongoose

//AUDITORIA (quem fez, o quê e quando)
const auditoriaSchema = new mongoose.Schema( {
  //--Contexto
  id_operacao: { type: mongoose.Schema.ObjectId, ref: 'operacao' }, //Operação vinculada à auditoria
  id_usuario: { type: mongoose.Schema.ObjectId, ref: 'usuario', required: [ true, 'Informe o código do usuário.' ] }, //Id do usuário
  //--Dados básicos
  id_contagemItem: { type: mongoose.Schema.ObjectId, ref: 'contagemItem' }, //ID da funcionalidade da contagem
  co_pagina: { type: String }, //Caso tenha tela, informar qual
  co_servico: { type: String }, //Caso seja serviço, informar qual
  //--Imagem
  ds_imagemAntes: { type: String }, //Caso necessário, informar imagem antes
  ds_imagemDepois: { type: String }, //Caso necessário, informar imagem depois
})

module.exports = restful.model('Auditoria', auditoriaSchema)

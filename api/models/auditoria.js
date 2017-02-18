const restful = require('node-restful')
const mongoose = restful.mongoose

//Informações de auditoria (quem fez, o quê e quando)
const auditoriaSchema = new mongoose.Schema( {
  id_usuario: { type: mongoose.Schema.ObjectId, ref: 'usuario', required: [ true, 'Informe o código do usuário.' ] }, //Id do usuário logado
  dh_acesso: { type: Date }, //Data e hora do acesso
  id_funcionalidade: { type: String }, //ID da funcionalidade da contagem
  id_pagina: { type: String }, //Caso tenha tela, informar qual
  id_servico: { type: String }, //Caso seja serviço, informar qual
  ds_imagemAntes: { type: String }, //Caso necessário, informar imagem antes
  ds_imagemDepois: { type: String } //Caso necessário, informar imagem depois
})

module.exports = restful.model('Auditoria', auditoriaSchema)

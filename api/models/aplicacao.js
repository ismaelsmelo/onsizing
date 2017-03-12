const restful = require('node-restful')
const mongoose = restful.mongoose

//APLICAÇÕES DE UMA EMPRESA
const aplicacaoSchema = new mongoose.Schema( {
  //--Contexto
  id_empresaCliente: { type: mongoose.Schema.ObjectId, ref: 'empresaCliente' },
  //--Dados básicos
  no_aplicacao: { type: String, required: [ true, 'Informe o nome da aplicação.' ] }, //Nome da aplicação
  ds_aplicacao: { type: String }, //Descrição da aplicação (tal como suas características)
  ic_tpAplicacao: { type: String, required: true, enum: ['Negócio', 'Suporte ao Negócio', 'Estrutural', 'Canal'] }, //Tipo da aplicação
  //--Situação
  ic_situacao: { type: String, required: true, enum: ['Concepção', 'Em desenolvimento', 'Em homologação', 'Em produção', 'Obsoleto', 'Cancelado"'] }, //Indicador de ativo/inativo
  ic_ativo: { type: Boolean }, //Indicador de ativo/inativo
  //--Trilha
  dt_cadastro: { type: Date, default: Date.now } //Data da última atualização
})

module.exports = restful.model('Aplicacao', aplicacaoSchema)

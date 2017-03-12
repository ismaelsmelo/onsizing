const restful = require('node-restful')
const mongoose = restful.mongoose

//PROJETO
const projetoSchema = new mongoose.Schema( {
  //--Dados básicos
  id_empresaCliente: { type: mongoose.Schema.ObjectId, ref: 'empresaCliente' },
  co_projeto: { type: String, required: [ true, 'Informe o código do projeto.' ] }, //Código do projeto na organização (interno)
  no_projeto: { type: String, required: [ true, 'Informe o nome do projeto.' ] }, //Nome do projeto
  ic_situacao: { type: String, required: true, enum: ['Prospecto', 'Aberto', 'Em andamento', 'Cancelado', 'Pendente', 'Concluído', 'Fechado'] }, //Situação do projeto
  //--Trilha
  dt_cadastro: { type: Date, default: Date.now } //Data do cadastro do projeto
})

module.exports = restful.model('Projeto', projetoSchema)

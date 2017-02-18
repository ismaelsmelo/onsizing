const restful = require('node-restful')
const mongoose = restful.mongoose

//Informações de projetos
const projetoSchema = new mongoose.Schema( {
  id_empresaCliente: { type: mongoose.Schema.ObjectId, ref: 'empresaCliente' },
  co_projeto: { type: String, required: [ true, 'Informe o código do projeto.' ] }, //Código do projeto na organização (interno)
  no_projeto: { type: String, required: [ true, 'Informe o nome do projeto.' ] }, //Nome do projeto
  ic_situacao: { type: String, required: true, enum: ['Prospecto', 'Aberto', 'Em andamento', 'Cancelado', 'Pendente', 'Concluído', 'Fechado'] }, //Situação do projeto
  dt_cadastro: { type: Date }, //Data de cadastro do projeto
  dt_atualizacao: { type: Date, default: Date.now } //Data da última atualização do projeto
})

module.exports = restful.model('Projeto', projetoSchema)

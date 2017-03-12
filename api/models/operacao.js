const restful = require('node-restful')
const mongoose = restful.mongoose

//CONTATOS DA OPERAÇÃO (matriz de comunicação)
const contatoOperacaoSchema = new mongoose.Schema( {
  id_contato: { type: mongoose.Schema.ObjectId, ref: 'contato' }, //Contato vinculado
  no_funcao: { type: String } //Função na matriz de comunicação da operação
})

//OPERAÇÃO
const operacaoSchema = new mongoose.Schema( {
  //--Dados básicos da operação
  no_operacao: { type: String, required: [ true, 'Informe o nome da operação.' ] },
  id_empresaCliente: { type: mongoose.Schema.ObjectId, ref: 'empresaCliente', required: [ true, 'Informe o código da empresa.' ] },
  id_empresaFornecedor: { type: mongoose.Schema.ObjectId, ref: 'empresaCliente' }, //ID da empresa (pode não haver fornecedor - caso o time seja interno)
  id_empresaMetricas: { type: mongoose.Schema.ObjectId, ref: 'empresaMetricas' }, //ID da empresa de métricas
  //--Dados da metodologia de desenvolvimento
  ic_tpMetodologiaGenerica: { type: String, required: true, enum: ['Tradicional', 'Tradicional - Iterativo', 'Ágil - Scrum', 'Ágil - Lean MVP'] }, //Modelo de desenvolvimento
  no_metodologia: { type: String }, //Nome da metodologia
  //--Trilha
  dt_cadastro: { type: Date, default: Date.now } //Data do cadastro
})

module.exports = restful.model('Operacao', operacaoSchema)

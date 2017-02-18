const restful = require('node-restful')
const mongoose = restful.mongoose

//Informações de fornecedores da empresa
const contagemItemSchema = new mongoose.Schema( {
  id_empresaCliente: { type: mongoose.Schema.ObjectId, ref: 'empresaCliente', required: [ true, 'Informe o código da empresa.' ] },
  id_empresaFornecedor: { type: mongoose.Schema.ObjectId, ref: 'empresaCliente', required: [ true, 'Informe o código da empresa.' ] }, //ID da empresa
  id_empresaMetricas: { type: mongoose.Schema.ObjectId, ref: 'empresaMetricas' }, //Nome da unidade da empresa
  dt_cadastro: { type: Date }, //Data do cadastro da empresa como fornecedor
  dt_atualizacao: { type: Date, default: Date.now } //Data de atualização do cadastro da empresa como fornecedor
})

module.exports = restful.model('ContagemItem', contagemItemSchema)

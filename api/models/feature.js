const restful = require('node-restful')
const mongoose = restful.mongoose

//FEATURE
const featureSchema = new mongoose.Schema( {
  //--Dados básicos
  id_empresaCliente: { type: mongoose.Schema.ObjectId, ref: 'empresaCliente' }, //ID da empresa cliente proprietária da feature
  co_feature: { type: String }, //Código interno à organização e identificador da feature
  tx_observacoes: { type: String }, //Observações sobre a feature
  ic_situacao: { type: String, required: true, enum: ['Backlog', 'To do', 'Doing', 'Done'] }, //Situação da feature
  ic_ativo: { type: Boolean }, //Indicador de ativo
  //--Trilha
  dt_cadastro: { type: Date, default: Date.now } //Data do cadastro
})

module.exports = restful.model('Feature', featureSchema)

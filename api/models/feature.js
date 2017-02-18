const restful = require('node-restful')
const mongoose = restful.mongoose

//Informações sobre features
const featureSchema = new mongoose.Schema( {
  id_empresaCliente: { type: mongoose.Schema.ObjectId, ref: 'empresaCliente' }, //ID da empresa cliente proprietária da feature
  co_feature: { type: String }, //Código interno à organização e identificador da feature
  tx_observacoes: { type: String }, //Observações sobre a feature
  ic_situacao: { type: String, required: true, enum: ['Backlog', 'To do', 'Doing', 'Done'] }, //Situação da feature
  dt_cadastro: { type: Date }, //Data de cadastro da feature
  dt_atualizacao: { type: Date, default: Date.now } //Data da última atualização
})

module.exports = restful.model('Feature', featureSchema)

const restful = require('node-restful')
const mongoose = restful.mongoose

const Transacao_Schema = new mongoose.Schema( {
  co_transacao: { type: String, required: [ true, 'Informe o código da transação.' ] },
  ic_tpEmpresaOrigem { type: String },
  id_empresaOrigem: { type: String },
  ic_tpEmpresaDestino { type: String },
  id_empresaDestino: { type: String },
  ic_operacao: { type: String }, //Debito/Crédito
  ic_tpTransacao: { type: String }, //ex. relatório benchmarking...
  vr_transacao: { type: String },
  dh_transacao: { type: Date },
  ds_transacao: { type: String, required: [ true, 'Informe a descrição da transação.' ] }
})

module.exports = restful.model('Transacao', Transacao_Schema)

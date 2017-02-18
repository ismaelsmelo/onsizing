const restful = require('node-restful')
const mongoose = restful.mongoose

//Informações sobre uma transação financeira
const transacaoSchema = new mongoose.Schema( {
  co_transacao: { type: String, required: [ true, 'Informe o código da transação.' ] }, //Código da transação financeira
  ic_tpEmpresaOrigem: { type: String }, //Tipo de empresa que originou a transação
  id_empresaOrigem: { type: String }, //ID da empresa que originou a transação
  ic_tpEmpresaDestino: { type: String }, //Tipo de empresa destino da transação
  id_empresaDestino: { type: String }, //ID da empresa destino da transação
  ic_operacao: { type: String }, //Indicador de debito ou crédito na empresa destino
  co_tpTransacao: { type: String }, //Código do tipo de transação. Ex. RELB001 para "Relatório de benchmarking..."
  vr_transacao: { type: String }, //Valor financeiro da transação
  dh_transacao: { type: Date }, //Data e hora da transação
  ds_transacao: { type: String, required: [ true, 'Informe a descrição da transação.' ] }, //Descrição ou observações da transação
  ic_erro: { type: String }, //Indicador do tipo de erro encontrado (caso identificado algum)
  tx_ajuste: { type: String }, //Descrição do ajuste
  dh_ajuste: { type: Date } //Data e hora do ajuste
})

module.exports = restful.model('Transacao', transacaoSchema)

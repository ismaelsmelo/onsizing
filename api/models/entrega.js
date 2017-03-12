const restful = require('node-restful')
const mongoose = restful.mongoose

//FEATURE DA ENTREGA
const featureSchema = new mongoose.Schema( {
  //--Dados básicos
  id_projeto: { type: mongoose.Schema.ObjectId, ref: 'projeto' }, //ID de um projeto ou demanda vinculada
  id_feature: { type: mongoose.Schema.ObjectId, ref: 'feature' }, //ID da feature
  //--Trilha
  dt_cadastro: { type: Date, default: Date.now } //Data do cadastro da entrega
})

//ENTREGA PREVISTA OU REALIZADA
const entregaSchema = new mongoose.Schema ( {
  //--Dados básicos
  co_entrega: { type: String }, //Código identificador da entrega na organização
  ic_tpEntrega: { type: String, enum: ['Iteração', 'Release', 'MVP', 'Entrega'] }, //Definição do nível de granularidade da entrega em questão (varia conforme o modelo de des.)
  id_bloco: { type: mongoose.Schema.ObjectId, ref: 'bloco' }, //ID do bloco de trabalho (se houver algum)
  features: [ featureSchema ], //Iterações da entrega (opcional, caso exista)
  tx_observacoes: { type: String }, //Observações sobre a entrega
  ic_situacao: { type: String, required: true }, //Situação da entrega
  //--Trilha
  dt_cadastro: { type: Date, default: Date.now } //Data de cadastro da entrega
})

module.exports = restful.model('Entrega', entregaSchema)

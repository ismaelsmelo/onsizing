const restful = require('node-restful')
const mongoose = restful.mongoose

//Informações sobre iterações das estregas (se existirem)
const featureSchema = new mongoose.Schema( {
  id_projeto: { type: mongoose.Schema.ObjectId, ref: 'projeto' }, //ID de um projeto ou demanda vinculada
  id_entrega: { type: mongoose.Schema.ObjectId, ref: 'entrega' }, //ID de uma entrega vinculada
  id_feature: { type: mongoose.Schema.ObjectId, ref: 'feature' }, //ID da feature
  dt_cadastro: { type: Date } //Data do vínculo
})

//Informações das entregas, mvps ou releases previstas/realizadas
const entregaSchema = new mongoose.Schema ( {
  co_entrega: { type: String }, //Código identificador da entrega na organização
  ic_tpEntrega: { type: String, enum: ['Release', 'MVP', 'Entrega'] }, //Definição do nível de granularidade da entrega em questão (varia conforme o modelo de des.)
  id_bloco: { type: mongoose.Schema.ObjectId, ref: 'bloco' }, //ID do bloco de trabalho (se houver algum)
  id_feature: [ featureSchema ], //Iterações da entrega (opcional, caso exista)
  tx_observacoes: { type: String }, //Observações sobre a entrega
  ic_situacao: { type: String, required: true }, //Situação da entrega
  dt_cadastro: { type: Date }, //Data do cadastro da entrega
  dt_atualizacao: { type: Date, default: Date.now } //Data da última atualização da entrega
})

module.exports = restful.model('Entrega', entregaSchema)

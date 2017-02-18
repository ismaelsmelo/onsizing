const restful = require('node-restful')
const mongoose = restful.mongoose

//Informações sobre um dia de trabalho do time numa Sprint de MVP ou Entrega
const lancamentoSchema = new mongoose.Schema( {
  dt_lancamento: { type: String, required: true }, //Data a qual o registro se refere
  id_usuario: { type: mongoose.Schema.ObjectId, ref: 'usuario', required: true }, //ID do usuário que está lançando as horas
  id_entrega: { type: mongoose.Schema.ObjectId, ref: 'entrega' }, //ou ID da entrega
  id_iteracao: { type: mongoose.Schema.ObjectId, ref: 'iteracao' }, //ID da sprint
  id_feature: { type: mongoose.Schema.ObjectId, ref: 'feature' }, //ID da feature
  qt_pfDoingIndividual: { type: String }, //Quantidade de PF em doing no dia
  qt_pfDoneIndividual: { type: String }, //Quantidade de PF em done no dia
  qt_horasTime: { type: Number }, //Quantidade de horas executadas
  tx_observacoes: { type: String }, //Observações relacionadas ao lançamento pertinentes a análises posteriores
  dt_cadastro: { type: Date }, //Data do cadastro (pode ter sido retroativo)
  dt_atualizacao: { type: Date, default: Date.now } //Data da última atualização
})

module.exports = restful.model('Lancamento', lancamentoSchema)

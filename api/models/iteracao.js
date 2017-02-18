const restful = require('node-restful')
const mongoose = restful.mongoose

//dados para o cumulative flow da iteração (opcional, conforme parametrização, com rotina atualizando)
const diaCumulativeFlowSchema = new mongoose.Schema( {
  dt_registroAutomatico: { type: Date, required: true }, //Data de registro
  qt_pfToDo: { type: String }, //PF à produzir
  qt_pfDoing: { type: String }, //Quantidade de PF em doing no dia
  qt_pfDone: { type: String }, //Quantidade de PF em done no dia
  dt_atualizacaoManual: { type: Date } //
})

const usSchema = new mongoose.Schema( {
  no_us: { type: String }, //Código ou nome da US
  id_feature: {type: String } //ID da feature relacionada à US
})

//Informações sobre iterações das estregas (se existirem)
const iteracaoSchema = new mongoose.Schema( {
  id_mvp: { type: mongoose.Schema.ObjectId, ref: 'entrega', required: true },
  id_sprint: { type: String }, //Número identificador da iteração na organização ou no bloco de trabalho
  diasCumulative: [ diaCumulativeFlowSchema ], //Dias do cumulative flow
  userStories: [ usSchema ], //US realizadas na iteração
  tx_observacoes: { type: String }, //Observações sobre a iteração
  ic_situacao: { type: String, required: true }, //Situação da iteração
  dt_cadastro: { type: Date }, //Data de cadastro da iteração
  dt_atualizacao: { type: Date, default: Date.now } //Data da última atualização
})

module.exports = restful.model('Iteracao', iteracaoSchema)

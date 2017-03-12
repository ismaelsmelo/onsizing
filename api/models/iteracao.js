const restful = require('node-restful')
const mongoose = restful.mongoose

//DIA DE TRABALHO (opcional, conforme parametrização, com rotina atualizando)
const diaCumulativeFlowSchema = new mongoose.Schema( {
  //--Dados básicos
  dt_registroAutomatico: { type: Date, required: true }, //Data de registro
  qt_pfToDo: { type: String }, //PF à produzir
  qt_pfDoing: { type: String }, //Quantidade de PF em doing no dia
  qt_pfDone: { type: String }, //Quantidade de PF em done no dia
  dt_atualizacaoManual: { type: Date } //
})

//US DA ITERACAO
const usSchema = new mongoose.Schema( {
  //--Dados básicos
  no_us: { type: String }, //Código ou nome da US
  id_feature: {type: String } //ID da feature relacionada à US
})

//ITERACAO (se existir)
const iteracaoSchema = new mongoose.Schema( {
  //--Contexto
  id_time: { type: mongoose.Schema.ObjectId, ref: 'time' }, //Identificador do time
  //--Dados básicos
  id_MvpOuEntrega: { type: mongoose.Schema.ObjectId, ref: 'entrega' },
  id_sprint: { type: String }, //Número identificador da iteração na organização ou no bloco de trabalho
  diasCumulative: [ diaCumulativeFlowSchema ], //Dias do cumulative flow
  userStories: [ usSchema ], //US realizadas na iteração
  tx_observacoes: { type: String }, //Observações sobre a iteração
  ic_situacao: { type: String, required: true }, //Situação da iteração
  //--Trilha
  dt_cadastro: { type: Date, default: Date.now } //Data do cadastro atualização
})

module.exports = restful.model('Iteracao', iteracaoSchema)

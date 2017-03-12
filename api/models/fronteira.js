const restful = require('node-restful')
const mongoose = restful.mongoose

//APLICAÇÕES DA FRONTEIRA
const sistemaSchema = new mongoose.Schema( {
  //--Dados básicos
  id_aplicacao: { type: mongoose.Schema.ObjectId, ref: 'aplicacao' }, //Sistema que integra a fronteira
  tx_observacoes: {type: String }, //Observações pertinentes ao vínculo do sistema
  ic_ativo: { type: Boolean } //Indicador de ativo
})

//PARTICAO DA FRONTEIRA
const particaoSnapSchema = new mongoose.Schema( {
  //--Dados básicos
  no_particaoSnap: { type: String }, //Se utilizado o método SNAP, informar partição
  ic_ativo: { type: Boolean } //Indicador de ativo
})

//FRONTEIRA/ CANAL (de acordo com cada método utilizado)
const fronteiraSchema = new mongoose.Schema( {
  //--Dados básicos
  id_empresaCliente: { type: mongoose.Schema.ObjectId, ref: 'empresaCliente' },
  //--Parâmetros da fronteira
  no_fronteira: { type: String, required: true }, //Nome da fronteira
  ic_tpFronteira: { type: String, required: true }, //Tipo de fronteira
  ic_fronteiraIfpug: { type: String }, //Tipo de fronteira IFPUG
  ic_fronteiraCosmic: { type: String }, //Tipo de fronteira COSMIC
  ic_porConvencao: { type: String }, //Tipo de fronteira atribuído por convenção
  id_camadaCosmic: { type: String }, //Se utilizado o método COSMIC, informar camada
  sistemas: [ sistemaSchema ], //Sistemas da fronteira
  particoesSnap: [ particaoSnapSchema ], //Partições da fronteira
  tx_observacoes: { type: String }, //Observações relacionadas ao lançamento pertinentes a análises posteriores
  ic_ativo: { type: Boolean }, //Indicador de ativo
  //--Trilha
  dt_cadastro: { type: Date }, //Data do cadastro (pode ter sido retroativo)
  dt_atualizacao: { type: Date, default: Date.now } //Data da última atualização
})

module.exports = restful.model('Fronteira', fronteiraSchema)

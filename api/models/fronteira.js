const restful = require('node-restful')
const mongoose = restful.mongoose

//Informações de sistemas que formam uma fronteira
const sistemaSchema = new mongoose.Schema( {
  id_aplicacao: { type: String } //Sistemas que integram a fronteira
})

//Informações de partições que formam uma fronteira
const particaoSnapSchema = new mongoose.Schema( {
  no_particaoSnap: { type: String } //Se utilizado o método SNAP, informar partição
})

//Informações sobre fronteiras funcionais, estruturais e canais (de acordo com cada método utilizado)
const fronteiraSchema = new mongoose.Schema( {
  id_empresaCliente: { type: mongoose.Schema.ObjectId, ref: 'empresaCliente' },
  no_fronteira: { type: String, required: true }, //Nome da fronteira
  ic_tpFronteira: { type: String, required: true }, //Tipo de fronteira
  ic_fronteiraIfpug: { type: String }, //Tipo de fronteira IFPUG
  ic_fronteiraCosmic: { type: String }, //Tipo de fronteira COSMIC
  ic_porConvencao: { type: String }, //Tipo de fronteira atribuído por convenção
  id_camadaCosmic: { type: String }, //Se utilizado o método COSMIC, informar camada
  sistemas: [ sistemaSchema ], //Sistemas da fronteira
  particoesSnap: [ particaoSnapSchema ], //Partições da fronteira
  tx_observacoes: { type: String }, //Observações relacionadas ao lançamento pertinentes a análises posteriores
  dt_cadastro: { type: Date }, //Data do cadastro (pode ter sido retroativo)
  dt_atualizacao: { type: Date, default: Date.now } //Data da última atualização
})

module.exports = restful.model('Fronteira', fronteiraSchema)

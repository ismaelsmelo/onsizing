const restful = require('node-restful')
const mongoose = restful.mongoose

//Informações de blocos
const blocoSchema = new mongoose.Schema( {
  co_bloco: { type: String }, //Número identificador do bloco
  no_bloco: { type: String }, //Nome do bloco
  ic_situacao: { type: String, required: true }, //Situação do bloco
  dt_cadastro: { type: Date }, //Data de cadastro do bloco
  dt_atualizacao: { type: Date, default: Date.now } //Data da última atualização
})

module.exports = restful.model('Bloco', blocoSchema)

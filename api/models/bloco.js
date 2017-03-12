const restful = require('node-restful')
const mongoose = restful.mongoose

//BLOCO
const blocoSchema = new mongoose.Schema( {
  //--Contexto
  id_time: { type: mongoose.Schema.ObjectId, ref: 'time' }, //time vinculado
  //--Dados básicos
  co_bloco: { type: String }, //Número identificador do bloco
  no_bloco: { type: String }, //Nome do bloco
  ic_situacao: { type: String, required: true }, //Situação do bloco
  //--Trilha
  dt_cadastro: { type: Date, default: Date.now } //Data do cadastro
})

module.exports = restful.model('Bloco', blocoSchema)

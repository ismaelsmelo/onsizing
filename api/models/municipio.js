const restful = require('node-restful')
const mongoose = restful.mongoose

//MUNICÍPIO
const municipioSchema = new mongoose.Schema( {
  //--Dados básicos
  no_municipio: { type: String }, //Nome do município
  sg_uf: { type: String }, //Sigla UF
  no_pais: { type: String }, //Nome do país
  ic_ativo: { type: Boolean }, //Situação do município
  //--Trilha
  dt_cadastro: { type: Date, default: Date.now } //Data do cadastro do município
})

module.exports = restful.model('Municipio', municipioSchema)

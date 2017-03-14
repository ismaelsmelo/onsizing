const restful = require('node-restful')
const mongoose = restful.mongoose

//MUNICÍPIO
const municipioSchema = new mongoose.Schema( {
  //--Dados básicos
  no_municipio: { type: String, required: true }, //Nome do município
  sg_uf: { type: String, required: true }, //Sigla UF
  no_pais: { type: String, required: true }, //Nome do país
  ic_ativo: { type: Boolean }, //Situação do município
  //--Trilha
  dt_cadastro: { type: Date, default: Date.now } //Data do cadastro do município
})

module.exports = restful.model('Municipio', municipioSchema)

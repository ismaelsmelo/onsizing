const restful = require('node-restful')
const mongoose = restful.mongoose

//TECNOLOGIA DA PLATAFORMA
const tecnologiaSchema = new mongoose.Schema( {
  //--Dados básicos
  no_tecnologia: { type: String, required: true }, //Nome da tecnologia
  ic_tpTecnologia: { type: String, required: true }, //Tipo de tecnologia
  ic_ativo: { type: Boolean }, //Situação do projeto
  //--Trilha
  dt_cadastro: { type: Date, default: Date.now } //Data do cadastro do projeto
})

module.exports = restful.model('Tecnologia', tecnologiaSchema)

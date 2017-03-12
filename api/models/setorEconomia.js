const restful = require('node-restful')
const mongoose = restful.mongoose

//SETOR DA ECONOMIA
const setorEconomiaSchema = new mongoose.Schema( {
  //--Dados básicos
  no_setorEconomia: { type: String, required: true }, //Nome do setor
  ic_ativo: { type: Boolean }, //Indicador de ativo
  dt_cadastro: { type: Date, default: Date.now } //Data do cadastro do setor
})

module.exports = restful.model('SetorEconomia', setorEconomiaSchema)

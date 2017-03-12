const restful = require('node-restful')
const mongoose = restful.mongoose

//TIMES DA EMPRESA
const timeSchema = new mongoose.Schema( {
  //--Contexto
  id_empresaCliente: { type: mongoose.Schema.ObjectId, ref: 'empresaCliente' }, //Empresa cliente
  id_portfolio: { type: String }, //Portfólio da empresa
  //--Dados básicos
  no_time: { type: String, required: [ true, 'Informe o nome do time.' ] }, //Nome do time
  no_emailTime: { type: String }, //Caixa de e-mail do time
  ic_ativo: { type: Boolean }, //Indicador de ativo/inativo
  //--Trilha
  dt_cadastro: { type: Date, default: Date.now } //Data de cadastro do time
})

module.exports = restful.model('Time', timeSchema)

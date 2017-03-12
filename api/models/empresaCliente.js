const restful = require('node-restful')
const mongoose = restful.mongoose

//PORTFÓLIOS DA EMPRESA
const portfolioSchema = new mongoose.Schema( {
  //--Dados básicos
  no_portfolio: { type: String, required: [ true, 'Informe o nome do portfólio.' ] }, //Nome do portfólio
  ic_ativo: { type: Boolean }, //Indicador de ativo
  //Trilha
  dt_cadastro: { type: Date, default: Date.now } //Data do cadastro
})

//EMPRESA CLIENTE
const empresaClienteSchema = new mongoose.Schema( {
  //--Dados básicos
  no_empresa: { type: String, required: [ true, 'Informe o nome da empresa.' ] }, //Nome da empresa
  nu_documento: { type: Number, index: {unique: true} }, //Número do documento
  id_setorEconomia: { type: mongoose.Schema.ObjectId, ref: 'setorEconomia' },
  no_emailPrincipal: { type: String, index: { unique: true } }, //Caixa de e-mail principal da empresa
  //--Endereço
  id_municipio: { type: mongoose.Schema.ObjectId, ref: 'municipio' }, //Município de endereço do contato
  ds_coordenadasGeodesicas: { type: String }, //Localização da empresa
  //--Dados relacionados
  portfolios: [ portfolioSchema ], //Áreas ou portfólios da empresa
  //--Observações
  tx_observacoes: { type: String }, //Observações sobre a empresa
  ic_ativo: { type: Boolean }, //Situação
  //--Trilha
  dt_cadastro: { type: Date, default: Date.now } //Data de cadastro da empresa
})

module.exports = restful.model('EmpresaCliente', empresaClienteSchema)

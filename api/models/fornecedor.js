const restful = require('node-restful')
const mongoose = restful.mongoose

//FORNECEDOR DE EMPRESA
const fornecedorSchema = new mongoose.Schema( {
  //--Dados básicos
  id_empresaCliente: { type: mongoose.Schema.ObjectId, ref: 'empresaCliente', required: true }, //ID da empresa cliente
  ic_tpFornecedor: { type: String, required: true, enum: ['Software', 'Qualidade', 'Métricas'] }, //Tipo de fornecedor (métricas ou software)
  id_empresa: { type: String, required: [ true, 'Informe o código da empresa.' ] }, //ID da empresa
  no_unidade: { type: String }, //Nome da unidade da empresa
  nu_telefone: { type: String }, //Número do telefone principal para contato
  ds_outroContato: { type: String }, //Texto livre para outros contatos
  id_municipio: { type: mongoose.Schema.ObjectId, ref: 'municipio' },
  ds_coordenadasGeodesicas: { type: String }, //Localização da empresa
  //--Trilha
  dt_cadastro: { type: Date, default: Date.now } //Data de cadastro da empresa como fornecedor
})

module.exports = restful.model('Fornecedor', fornecedorSchema)

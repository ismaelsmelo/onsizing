const restful = require('node-restful')
const mongoose = restful.mongoose

//Informações de fornecedores da empresa
const fornecedorSchema = new mongoose.Schema( {
  id_empresaCliente: { type: mongoose.Schema.ObjectId, ref: 'empresaCliente', required: true }, //ID da empresa cliente
  ic_tpFornecedor: { type: String, required: true, enum: ['Software', 'Qualidade', 'Métricas'] }, //Tipo de fornecedor (métricas ou software)
  id_empresa: { type: String, required: [ true, 'Informe o código da empresa.' ] }, //ID da empresa
  no_unidade: { type: String }, //Nome da unidade da empresa
  nu_telefone: { type: String }, //Número do telefone principal para contato
  ds_outroContato: { type: String }, //Texto livre para outros contatos
  no_pais: { type: String }, //Nome do país
  no_uf: { type: String }, //Nome da UF
  no_municipio: { type: String }, //Nome do município
  ds_coordenadasGeodesicas: { type: String }, //Localização da empresa
  dt_cadastro: { type: Date }, //Data do cadastro da empresa como fornecedor
  dt_atualizacao: { type: Date, default: Date.now } //Data de atualização do cadastro da empresa como fornecedor
})

module.exports = restful.model('Fornecedor', fornecedorSchema)

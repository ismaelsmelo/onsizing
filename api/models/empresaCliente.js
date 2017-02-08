const restful = require('node-restful')
const mongoose = restful.mongoose

const EmpresaCliente_Schema = new mongoose.Schema( {
  no_empresa: { type: String, required: [ true, 'Informe o nome da empresa.' ] },
  nu_cnpj: { type: String, required: [ true, 'Informe o CNPJ da empresa.' ] }
  portfolios: [EmpresaPortfolio_Schema],
  fornecedores: [EmpresaFornecedor_Schema],
  aplicacoes: [EmpresaAplicacao_Schema],
  ds_observacoes: { type: String }
})

const EmpresaPortfolio_Schema = new mongoose.Schema( {
  no_portfolio: { type: String, required: [ true, 'Informe o nome do portfólio.' ] },
  times: [empresaTime_Schema],
  ic_situacao: { type: String, required: true }
})

const EmpresaTime_Schema = new mongoose.Schema( {
  no_time: { type: String, required: [ true, 'Informe o nome do time.' ] },
  ic_modelo: { type: String, required: true, enum: ['Ágil', 'Híbrido'] },
  ic_situacao: { type: String, required: true }
})

const EmpresaFornecedor_Schema = new mongoose.Schema( {
  co_empresa: { type: String, required: [ true, 'Informe o código da empresa.' ] },
  ic_tpFornecedor: { type: String, required: true, enum: ['Software', 'Métricas'] }
})

const EmpresaAplicacao_Schema = new mongoose.Schema( {
  co_aplicacao: { type: String, required: [ true, 'Informe o código da aplicação.' ] },
  no_aplicacao: { type: String, required: [ true, 'Informe o nome da aplicação.' ] },
  ds_aplicacao: { type: String },
  ic_tpAplicacao: { type: String, required: true, enum: ['Negócio', 'Suporte ao Negócio', 'Estrutural', 'Canal'] }
})

module.exports = restful.model('EmpresaCliente', EmpresaCliente_Schema)

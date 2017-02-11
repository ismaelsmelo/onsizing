const restful = require('node-restful')
const mongoose = restful.mongoose

const EmpresaCliente_Schema = new mongoose.Schema( {
  no_empresa: { type: String, required: [ true, 'Informe o nome da empresa.' ] },
  nu_documento: { type: Number, index: {unique: true} },
  no_pais: { type: String },
  no_uf: { type: String },
  no_municipio: { type: String },
  no_emailEmpresaCliente: { type: String },
  projetos: [Empresa_Projeto_Schema],
  areasOuPortfolios: [Empresa_AreaOuPortfolio_Schema],
  aplicacoes: [Empresa_Aplicacao_Schema],
  fornecedores: [Empresa_Fornecedor_Schema],
  metodologiasDesenvolvimento: [Empresa_MetodologiasDesenvolvimento_Schema],
  ds_latitude: { type: String },
  ds_longitude: { type: String },
  ds_observacoes: { type: String },
  dt_cadastro: { type: Date },
  dt_atualizacao: { type: Date, default: Date.now }
})

const Empresa_Projeto_Schema = new mongoose.Schema( {
  co_projeto: { type: String, required: [ true, 'Informe o código do projeto.' ] },
  no_projeto: { type: String, required: [ true, 'Informe o nome do projeto.' ] },
  ic_situacao: { type: String, required: true },
  dt_cadastro: { type: Date },
  dt_atualizacao: { type: Date, default: Date.now }
})

const Empresa_AreaOuPortfolio_Schema = new mongoose.Schema( {
  no_areaPortfolio: { type: String, required: [ true, 'Informe o nome do portfólio.' ] },
  times: [Empresa_Time_Schema],
  ic_situacao: { type: String, required: true },
  dt_cadastro: { type: Date },
  dt_atualizacao: { type: Date, default: Date.now }
})

const Empresa_Time_Schema = new mongoose.Schema( {
  no_time: { type: String, required: [ true, 'Informe o nome do time.' ] },
  no_emailTime: { type: String },
  ic_situacao: { type: String, required: true },
  dt_cadastro: { type: Date },
  dt_atualizacao: { type: Date, default: Date.now }
})

const Empresa_Aplicacao_Schema = new mongoose.Schema( {
  co_aplicacao: { type: String, required: [ true, 'Informe o código da aplicação.' ] },
  no_aplicacao: { type: String, required: [ true, 'Informe o nome da aplicação.' ] },
  ds_aplicacao: { type: String },
  ic_tpAplicacao: { type: String, required: true, enum: ['Negócio', 'Suporte ao Negócio', 'Estrutural', 'Canal'] },
  dt_cadastro: { type: Date },
  dt_atualizacao: { type: Date, default: Date.now }
})

const Empresa_Fornecedor_Schema = new mongoose.Schema( {
  ic_tpFornecedor: { type: String, required: true, enum: ['Software', 'Métricas'] },
  id_empresa: { type: String, required: [ true, 'Informe o código da empresa.' ] },
  no_unidade: { type: String },
  nu_telefone: { type: String },
  ds_outroContato: { type: String },
  no_pais: { type: String },
  no_uf: { type: String },
  no_municipio: { type: String },
  ds_latitude: { type: String },
  ds_longitude: { type: String },
  dt_cadastro: { type: Date },
  dt_atualizacao: { type: Date, default: Date.now }
})

const Empresa_MetodologiasDesenvolvimento_Schema = new mongoose.Schema( {
  ic_tpMetodologiaGenerica: { type: String, required: true, enum: ['Tradicional', 'Tradicional - Iterativo', 'Ágil - Scrum', 'Ágil - Lean MVP'] },
  no_metodologia: { type: String },
  ic_tpModeloMetricas: { type: String, required: true, enum: ['APF', 'APF + SISP 2.0', 'APF + SISP 2.1', 'APF + SNAP', 'COSMIC'] },
  dt_cadastro: { type: Date },
  dt_atualizacao: { type: Date, default: Date.now }
})

module.exports = restful.model('EmpresaCliente', EmpresaCliente_Schema)

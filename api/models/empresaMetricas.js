const restful = require('node-restful')
const mongoose = restful.mongoose

const especialistaSchema = new mongoose.Schema( {
  no_especialista: { type: String, required: [ true, 'Informe o nome do especialista.' ] },
  ds_titulos: { type: String, required: true },
  co_usuario: { type: String, required: true },
  ic_situacao: { type: String, required: true },
  dt_cadastro: { type: Date },
  dt_atualizacao: { type: Date, default: Date.now }
})

const equipeSchema = new mongoose.Schema( {
  no_equipe: { type: String, required: [ true, 'Informe o nome da equipe.' ] },
  no_emailEquipe: { type: String },
  especialistas: [especialistaSchema],
  ic_equipePadrao: { type: String },
  ic_situacao: { type: String, required: true },
  dt_cadastro: { type: Date },
  dt_atualizacao: { type: Date, default: Date.now }
})

const empresaMetricasSchema = new mongoose.Schema( {
  no_empresa: { type: String, required: [ true, 'Informe o nome da empresa.' ] },
  nu_cnpj: { type: String, required: [ true, 'Informe o CNPJ da empresa.' ] },
  no_emailEmpresaMetricas: { type: String },
  equipes: [equipeSchema],
  ic_parametroLancarHoras: { type: String }, //empresa de metricas faz seu controle de horas na plataforma
  ic_lancamentoHorasAberto: { type: String }, //empresa cliente também pode ver os lançamentos
  ds_observacoes: { type: String },
  dt_cadastro: { type: Date },
  dt_atualizacao: { type: Date, default: Date.now }
})

module.exports = restful.model('EmpresaMetricas', empresaMetricasSchema)

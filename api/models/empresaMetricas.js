const restful = require('node-restful')
const mongoose = restful.mongoose

const EmpresaMetricas_Schema = new mongoose.Schema( {
  no_empresa: { type: String, required: [ true, 'Informe o nome da empresa.' ] },
  nu_cnpj: { type: String, required: [ true, 'Informe o CNPJ da empresa.' ] },
  no_emailEmpresaMetricas: { type: String },
  equipes: [EmpresaMetricas_Equipe_Schema],
  ic_parametroLancarHoras: { type: String }, //empresa de metricas faz seu controle de horas na plataforma
  ic_lancamentoHorasAberto: { type: String }, //empresa cliente também pode ver os lançamentos
  ds_observacoes: { type: String }
})

const EmpresaMetricas_Equipe_Schema = new mongoose.Schema( {
  no_equipe: { type: String, required: [ true, 'Informe o nome da equipe.' ] },
  no_emailEquipe: { type: String },
  especialistas: [EmpresaMetricas_Especialista_Schema],
  ic_equipePadrao: { type: String },
  ic_situacao: { type: String, required: true }
})

const EmpresaMetricas_Especialista_Schema = new mongoose.Schema( {
  no_especialista: { type: String, required: [ true, 'Informe o nome do especialista.' ] },
  ds_titulos: { type: String, required: true },
  co_usuario: { type: String, required: true },
  ic_situacao: { type: String, required: true }
})

module.exports = restful.model('EmpresaMetricas', EmpresaMetricas_Schema)

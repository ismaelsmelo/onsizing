const restful = require('node-restful')
const mongoose = restful.mongoose

const EmpresaMetricas_Schema = new mongoose.Schema( {
  no_empresa: { type: String, required: [ true, 'Informe o nome da empresa.' ] },
  nu_cnpj: { type: String, required: [ true, 'Informe o CNPJ da empresa.' ] }
  equipes: [EmpresaEquipe_Schema],
  ds_observacoes: { type: String }
})

const EmpresaEquipe_Schema = new mongoose.Schema( {
  no_equipe: { type: String, required: [ true, 'Informe o nome da equipe.' ] },
  especialistas: [EmpresaEspecialista_Schema],
  ic_situacao: { type: String, required: true }
})

const EmpresaEspecialista_Schema = new mongoose.Schema( {
  no_especialista: { type: String, required: [ true, 'Informe o nome do especialista.' ] },
  ds_titulos: { type: String, required: true },
  co_usuario: { type: String, required: true },
  ic_situacao: { type: String, required: true }
})

module.exports = restful.model('EmpresaMetricas', EmpresaMetricas_Schema)

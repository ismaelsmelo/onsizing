const restful = require('node-restful')
const mongoose = restful.mongoose

const LeanMvpEpico_Schema = new mongoose.Schema( {
  id_time: { type: String, required: true },
  id_requisicao: { type: String, required: true }, //vincula com a requisição
  no_epico: { type: String, required: true },
  mvps: [LeanMvp_Epico_MVP_Schema],
  dh_cadastro: { type: String, required: true },
  dh_ultimaAlteracao: { type: String, required: true },
  dt_inicioVigencia: { type: String, required: true },
  dt_fimVigencia:  { type: String, required: true },
  ic_situacao: { type: String, required: true },
  dt_cadastro: { type: Date },
  dt_atualizacao: { type: Date, default: Date.now }
})

const LeanMvp_Epico_MVP_Schema = new mongoose.Schema( {
  nu_mvp: { type: Numeric, min: 1, max: 99, required: true },
  sprints: [LeanMvp_Epico_Sprint_Schema],
  ic_situacao: { type: String, required: true },
  dt_cadastro: { type: Date },
  dt_atualizacao: { type: Date, default: Date.now }
})

const LeanMvp_Epico_Sprint_Schema = new mongoose.Schema( {
  nu_sprint: { type: Numeric, min: 1, max: 99, required: true },
  dias: [LeanMvp_Epico_Dia_Schema],
  ic_situacao: { type: String, required: true },
  dt_cadastro: { type: Date },
  dt_atualizacao: { type: Date, default: Date.now }
})

const LeanMvp_Epico_Dia_Schema = new mongoose.Schema( {
  dt_registro: { type: String, required: true },
  qt_pfToDo: { type: String, required: true },
  qt_pfDoing: { type: String, required: true },
  qt_pfDone: { type: String, required: true },
  dt_cadastro: { type: Date },
  dt_atualizacao: { type: Date, default: Date.now }
})

module.exports = restful.model('Epico', Epico_Schema)

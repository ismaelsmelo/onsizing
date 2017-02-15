const restful = require('node-restful')
const mongoose = restful.mongoose

const diaSchema = new mongoose.Schema( {
  dt_registro: { type: String, required: true },
  qt_pfToDo: { type: String, required: true },
  qt_pfDoing: { type: String, required: true },
  qt_pfDone: { type: String, required: true },
  dt_cadastro: { type: Date },
  dt_atualizacao: { type: Date, default: Date.now }
})

const sprintSchema = new mongoose.Schema( {
  nu_sprint: { type: Number, min: 1, max: 99, required: true },
  dias: [ diaSchema ],
  ic_situacao: { type: String, required: true },
  dt_cadastro: { type: Date },
  dt_atualizacao: { type: Date, default: Date.now }
})

const mvpSchema = new mongoose.Schema( {
  nu_mvp: { type: Number, min: 1, max: 99, required: true },
  sprints: [ sprintSchema ],
  ic_situacao: { type: String, required: true },
  dt_cadastro: { type: Date },
  dt_atualizacao: { type: Date, default: Date.now }
})

const epicoSchema = new mongoose.Schema( {
  id_time: { type: String, required: true },
  id_requisicao: { type: String, required: true }, //vincula com a requisição
  no_epico: { type: String, required: true },
  mvps: [ mvpSchema ],
  dh_cadastro: { type: String, required: true },
  dh_ultimaAlteracao: { type: String, required: true },
  dt_inicioVigencia: { type: String, required: true },
  dt_fimVigencia:  { type: String, required: true },
  ic_situacao: { type: String, required: true },
  dt_cadastro: { type: Date },
  dt_atualizacao: { type: Date, default: Date.now }
})

module.exports = restful.model('Epico', epicoSchema)

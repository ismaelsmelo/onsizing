const restful = require('node-restful')
const mongoose = restful.mongoose

const requisicaoSchema = new mongoose.Schema( {
  co_requisicao: { type: String, required: true },
  ic_tpRequisicao: { type: String, required: true },
  ic_proposito: { type: String, required: true },
  epicos: [epicoSchema],
  qt_pfc: { type: Numeric, min: 0 },
  qt_pfn: { type: Numeric, min: 0 },
  ic_outlier: { type: String, enum: ['S', 'N'] },
  ds_justificativaOutlier: {type: String },
  ds_laudo: { type: String }
})

const epicoSchema = new mongoose.Schema( {
  co_epico: { type: String, required: true },
  no_epico: {},
  mvps: [mvpSchema],
  ic_situacao: {}
})

const mvpSchema = new mongoose.Schema( {
  nu_mvp: { type: Numeric, min: 1, max: 99, required: true },
  sprints: [sprintSchema],
  ic_situacao: {}
})

const sprintSchema = new mongoose.Schema( {
  nu_sprint: { type: Numeric, min: 1, max: 99, required: true }
  dias: [diaSchema]
  ic_situacao: {}
})

const diaSchema = new mongoose.Schema( {
  dt_registro: {},
  qt_pfToDo:
  qt_pfDoing:
  qt_pfDone: 
})

module.exports.model('requisicao', requisicaoSchema)

const restful = require('node-restful')
const mongoose = restful.mongoose

const Requisicao_Schema = new mongoose.Schema( {
  co_empresaCliente: { type: String, required: true },
  co_empresaMetricas: { type: String, required: true },
  co_prospecto: { type: String, required: true },
  co_requisicao: { type: String, required: true },
  ic_tpRequisicao: { type: String, required: true },
  co_usuarioSolicitante: { type: String, required: true },
  co_usuarioResponsavel: { type: String, required: true },
  contagensTradicional: [RequisicaoContagemTradicional_Schema],
  contagensAgil: [RequisicaoContagemAgil_Schema],
  apoios: [RequisicaoApoio_Schema],
  treinamentos: [RequisicaoTreinamento_Schema],
  benchmarkings: [RequisicaoBenchmarking_Schema],
  contatos: [RequisicaoContato_Schema],
  dh_inicio: { type: String, required: true },
  dh_ultAtualizacao: { type: String, required: true },
  dh_fim: { type: String, required: true },
  ic_situacao: { type: String, required: true },
  ds_laudo: { type: String }
  lancamentos: [RequisicaoLancamento_Schema],
})

const RequisicaoContagemTradicional_Schema = new mongoose.Schema ( {
  ic_proposito: { type: String, required: true },
  ds_contagem: { type: String }
})

const RequisicaoContagemAgil_Schema = new mongoose.Schema ( {
  ic_proposito: { type: String, required: true },
  ds_contagem: { type: String }
})

const RequisicaoApoio_Schema = new mongoose.Schema ( {
  ic_tpRequisicao: { type: String, required: true },
  ic_tipoApoio: { type: String, required: true },
  ds_apoio: { type: String }
})

const RequisicaoTreinamento_Schema = new mongoose.Schema ( {
  no_treinamento: { type: String, required: true },
  ds_treinamento: { type: String, required: true },
  qt_horasTreinamento: { type: String, required: true }
})

const RequisicaoBenchmarking_Schema = new mongoose.Schema ( {
  ic_tipoRelatorio: { type: String, required: true }
})

const RequisicaoContato_Schema = new mongoose.Schema ( {
  ds_necessidade: { type: String, required: true },
  ic_motivoContato: { type: String, required: true },
  ic_canalOrigem: { type: String, required: true }
})

const RequisicaoLancamento_Schema = new mongoose.Schema ( {
  id_empresaMetricas: { type: String, required: true },
  ic_tpLancamento: { type: String, required: true },
  dt_lancamento: { type: String, required: true },
  hh_inicio: { type: String, required: true },
  hh_fim: { type: String, required: true },
  id_usuario: { type: String, required: true }
})



const RequisicaoEpico_Schema = new mongoose.Schema( {
  co_epico: { type: String, required: true },
  no_epico: { type: String, required: true },
  mvps: [mvpSchema],
  ic_situacao: { type: String, required: true }
})

const RequisicaoMvp_Schema = new mongoose.Schema( {
  nu_mvp: { type: Numeric, min: 1, max: 99, required: true },
  sprints: [sprintSchema],
  ic_situacao: { type: String, required: true }
})

const RequisicaoSprint_Schema = new mongoose.Schema( {
  nu_sprint: { type: Numeric, min: 1, max: 99, required: true },
  dias: [diaSchema],
  ic_situacao: { type: String, required: true }
})

const RequisicaoDiaSchema = new mongoose.Schema( {
  dt_registro: { type: String, required: true },
  qt_pfToDo: { type: String, required: true },
  qt_pfDoing: { type: String, required: true },
  qt_pfDone: { type: String, required: true }
})

module.exports = restful.model('requisicao', requisicaoSchema)

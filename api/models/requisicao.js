const restful = require('node-restful')
const mongoose = restful.mongoose

const Requisicao_Schema = new mongoose.Schema( {
  co_requisicao: { type: String, required: true },
  id_prospecto: { type: String, required: true },
  id_empresaCliente: { type: String, required: true },
  id_empresaMetricas: { type: String, required: true },
  id_usuarioSolicitante: { type: String, required: true },
  id_usuarioResponsavel: { type: String, required: true },
  id_equipeEmpresaMetricas: { type: String, required: true },
  contagensTradicional: [Requisicao_ContagemTradicional_Schema],
  contagensAgil: [Requisicao_ContagemAgil_Schema],
  apoios: [Requisicao_Apoio_Schema],
  treinamentos: [Requisicao_Treinamento_Schema],
  benchmarkings: [Requisicao_Benchmarking_Schema],
  contatos: [Requisicao_Contato_Schema],
  dh_inicio: { type: Date, required: true },
  dh_ultAtualizacao: { type: Date, required: true },
  dh_fim: { type: Date, required: true },
  ic_situacao: { type: String, required: true },
  ds_parecer: { type: String },
  lancamentos: [Requisicao_Lancamento_Schema],
  dt_cadastro: { type: Date },
  dt_atualizacao: { type: Date, default: Date.now }
})

const Requisicao_ContagemTradicional_Schema = new mongoose.Schema ( {
  ic_proposito: { type: String, required: true },
  id_usuarioResponsavel: { type: String, required: true },
  ds_contagem: { type: String },
  url_documentacao: { type: String }
})

const Requisicao_ContagemAgil_Schema = new mongoose.Schema ( {
  ic_proposito: { type: String, required: true },
  id_usuarioResponsavel: { type: String, required: true },
  ds_contagem: { type: String },
  url_documentacao: { type: String }
})

const Requisicao_Apoio_Schema = new mongoose.Schema ( {
  id_usuarioResponsavel: { type: String, required: true },
  ic_tipoApoio: { type: String, required: true },
  ds_apoio: { type: String },
  ds_retornoApoio: { type: String },
  url_documentacao: { type: String }
})

const Requisicao_Treinamento_Schema = new mongoose.Schema ( {
  no_treinamento: { type: String, required: true },
  id_usuarioResponsavel: { type: String, required: true },
  ds_treinamento: { type: String, required: true },
  qt_horasTreinamento: { type: String, required: true },
  url_documentacao: { type: String }
})

const Requisicao_Benchmarking_Schema = new mongoose.Schema ( {
  id_usuarioResponsavel: { type: String, required: true },
  ic_tipoRelatorio: { type: String, required: true },
  url_documentacao: { type: String }
})

const Requisicao_Contato_Schema = new mongoose.Schema ( {
  ds_necessidade: { type: String, required: true },
  ic_motivoContato: { type: String, required: true },
  id_usuarioResponsavel: { type: String, required: true },
  ic_canalOrigem: { type: String, required: true },
  ds_retornoContato: { type: String },
  url_documentacao: { type: String }
})

const Requisicao_Lancamento_Schema = new mongoose.Schema ( {
  id_empresaMetricas: { type: String, required: true },
  id_equipeEmpresaMetricas: { type: String },
  id_usuarioResponsavel: { type: String, required: true },
  ic_tpLancamento: { type: String, required: true },
  dt_lancamento: { type: Date, required: true },
  hh_inicio: { type: String, required: true },
  hh_fim: { type: String, required: true },
  id_usuario: { type: String, required: true }
})

module.exports = restful.model('Requisicao', Requisicao_Schema)

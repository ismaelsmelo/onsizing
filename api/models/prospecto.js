const restful = require('node-restful')
const mongoose = restful.mongoose

const Prospecto_Schema = new mongoose.Schema( {
  co_prospecto: { type: String, required: [ true, 'Informe o código do prospecto.' ] },
  no_prospecto: { type: String, required: [ true, 'Informe o nome do prospecto.' ] },
  ds_prospecto: { type: String },
  id_empresaCliente: { type: String },
  ofertas: [Prospecto_Oferta_Schema],
  ic_empresaMetricasSelecionada: { type: String },
  ds_justificativaSelecao: { type: String },
  url_documentacao { type: String },
  ic_situacao: { type: String, required: [ true, 'Informe a situação do prospecto.' ] },
  dt_atualizacao: { type: Date, default: Date.now },
  dt_cadastro: { type: Date },
  dt_atualizacao: { type: Date, default: Date.now }
})

const Prospecto_Oferta_Schema = new mongoose.Schema ({
  id_empresaMetricas: { type: String, required: [ true, 'Informe a empresa de Métricas.' ] },
  ic_interesse: { type: String },
  vr_oferta: { type: String },
  ds_consideracoes: { type: String },
  vr_ofertaRevisada: { type: String },
  dt_cadastro: { type: Date },
  dt_atualizacao: { type: Date, default: Date.now }
})

module.exports = restful.model('Prospecto', Prospecto_Schema)

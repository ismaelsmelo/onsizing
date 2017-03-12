const restful = require('node-restful')
const mongoose = restful.mongoose

//OFERTA PARA UM PROSPECTO
const ofertaSchema = new mongoose.Schema ({
  //--Dados básicos
  id_empresaMetricas: { type: mongoose.Schema.ObjectId, ref: 'empresaMetricas', required: [ true, 'Informe a empresa de Métricas.' ] },
  ic_interesse: { type: String }, //Indica o interesse da empresa em fazer uma oferta
  vr_oferta: { type: String }, //Valor financeiro estimado da oferta
  qt_horasOferta: { type: String }, //Quantidade de horas estimadas
  tx_consideracoes: { type: String }, //Descrição da considerações
  vr_ofertaRevisada: { type: String }, //Valor da oferta revisada
  //--Trilha
  dt_cadastro: { type: Date, default: Date.now } //Data de cadastro da oferta
})

//PROSPECTO
const prospectoSchema = new mongoose.Schema( {
  //--Dados básicos
  id_empresaCliente: { type: mongoose.Schema.ObjectId, ref: 'empresaCliente' }, //ID da empresa cliente
  //--Prospecto
  co_prospecto: { type: String, required: [ true, 'Informe o código do prospecto.' ] }, //Código do prospecto
  no_prospecto: { type: String, required: [ true, 'Informe o nome do prospecto.' ] }, //Nome do prospecto
  tx_prospecto: { type: String }, //Descrição do prospecto
  ds_urlDocumentacao: { type: String }, //URL da documentação
  ic_situacao: { type: String, required: [ true, 'Informe a situação do prospecto.' ] }, //Situação do prospecto
  //--Ofertas
  ofertas: [ ofertaSchema ], // Relação de ofertas recebidas em um prospecto
  id_empresaMetricasSelecionada: { type: mongoose.Schema.ObjectId, ref: 'empresaMetricas' }, //ID da empresa que teve a oferta selecionada
  tx_justificativaSelecao: { type: String }, //Justificativa para seleção da empresa

  //--Trilha
  dt_cadastro: { type: Date, default: Date.now } //Data de cadastro do prospecto
})

module.exports = restful.model('Prospecto', prospectoSchema)

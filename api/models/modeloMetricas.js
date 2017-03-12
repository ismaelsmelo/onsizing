const restful = require('node-restful')
const mongoose = restful.mongoose

//MODELO DE MÉTRICAS DA OPERAÇÃO
const modeloMetricasSchema = new mongoose.Schema( {
  //--Contexto
  id_operacao: { type: mongoose.Schema.ObjectId, ref: 'operacao' }, //Operação que faz uso do modelo de métricas
  //--Dados básicos
  no_modeloMetricas: { type: String }, //Nome do modelo de métricas
  //--Parametrização das métricas base
  ic_tpUnAvaliada: { type: String, enum: ['Projeto', 'MVP', 'Entrega', 'Bloco', 'Sprint'] }, //Tipo de unidade avaliada
  ic_nesmaEst: { type: String, enum: ['O', 'M', '-', 'O*', 'M*'] }, //Indicador de uso do método NESMA de Estimativa
  ic_apfIfpug: { type: String, enum: ['O', 'M', '-', 'O*', 'M*'] }, //Indicador de uso do método APF-IFPUG
  ic_snap: { type: String, enum: ['O', 'M', '-', 'O*', 'M*'] }, //Indicador de uso do método SNAP
  ic_cosmic: { type: String, enum: ['O', 'M', '-', 'O*', 'M*'] }, //Indicador de uso do método COSMIC
  //--Parametrização de convenções locais de métricas
  ic_localNesma: { type: String, enum: ['O', 'M', '-'] }, //Permite uso de diretrizes locais para o método
  ic_localIfpug: { type: String, enum: ['O', 'M', '-'] }, //Permite uso de diretrizes locais para o método
  ic_localSnap: { type: String, enum: ['O', 'M', '-'] }, //Permite uso de diretrizes locais para o método
  ic_localCosmic: { type: String, enum: ['O', 'M', '-'] }, //Permite uso de diretrizes locais para o método
  ic_prodCosmicRefNESMAEst: { type: String, enum: ['O', 'M', '-'] }, //Permite uso da NESMA Estimada como ref. produtividade p/ Cosmic
  ic_nivelEstimativaCosmic: { type: String, enum: ['Processo', 'Feature (P, M, G, GG)'] }, //Indicador do nível de granularidade/decomp. e modelo de estimativa
  ic_realizaLancamento: { type: String, enum: ['S', 'N'] }, //Parâmetro que especifica se deverá ocorrer lançamento p/ atualização do cumulative flow
  //--Propósitos do modelo de métricas específico
  ic_proposito1: { type: Number, min: 1, max: 4 }, //Podendo ser 1 - Contratação, 2 - Planejamento, 3 - Acompanhamento, 4 - Comparação com o passado
  ic_proposito2: { type: Number, min: 1, max: 4 }, //Podendo ser 1 - Contratação, 2 - Planejamento, 3 - Acompanhamento, 4 - Comparação com o passado
  ic_proposito3: { type: Number, min: 1, max: 4 }, //Podendo ser 1 - Contratação, 2 - Planejamento, 3 - Acompanhamento, 4 - Comparação com o passado
  ic_proposito4: { type: Number, min: 1, max: 4 }, //Podendo ser 1 - Contratação, 2 - Planejamento, 3 - Acompanhamento, 4 - Comparação com o passado
  ic_proposito5: { type: Number, min: 1, max: 4 }, //Podendo ser 1 - Contratação, 2 - Planejamento, 3 - Acompanhamento, 4 - Comparação com o passado
  //--Dados complementares
  ds_urlProcesso: { type: String }, //URL de onde o processo está descrito
  ic_ativo: { type: Boolean } //Indicador de ativo/inativo
})

module.exports = restful.model('ModeloMetricas', modeloMetricasSchema)

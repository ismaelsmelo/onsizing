const restful = require('node-restful')
const mongoose = restful.mongoose

//Informações de times da empresa
const timeSchema = new mongoose.Schema( {
  no_time: { type: String, required: [ true, 'Informe o nome do time.' ] }, //Nome do time
  no_emailTime: { type: String }, //Caixa de e-mail do time
  ic_ativo: { type: String, required: true, enum: ['S', 'N'] }, //Indicador de ativo/inativo
  dt_cadastro: { type: Date }, //Data do cadastro do time
  dt_atualizacao: { type: Date, default: Date.now } //Data da última atualização do time
})

//Informações de portfólios da empresa
const portfolioSchema = new mongoose.Schema( {
  no_portfolio: { type: String, required: [ true, 'Informe o nome do portfólio.' ] }, //Nome do portfólio
  times: [timeSchema], //Times ligados ao portfólio (tema)
  ic_ativo: { type: String, required: true, enum: ['S', 'N'] }, //Indicador de ativo/inativo
  dt_cadastro: { type: Date }, //Data de cadastro
  dt_atualizacao: { type: Date, default: Date.now } //Data da última atualização
})

//Informações de aplicações da empresa
const aplicacaoSchema = new mongoose.Schema( {
  co_aplicacao: { type: String, required: [ true, 'Informe o código da aplicação.' ] }, //Código ou sigla da aplicação na organização
  no_aplicacao: { type: String, required: [ true, 'Informe o nome da aplicação.' ] }, //Nome da aplicação
  ds_aplicacao: { type: String }, //Descrição da aplicação (tal como suas características)
  ic_tpAplicacao: { type: String, required: true, enum: ['Negócio', 'Suporte ao Negócio', 'Estrutural', 'Canal'] }, //Tipo da aplicação
  ic_situacao: { type: String, required: true, enum: ['Concepção', 'Em desenolvimento', 'Em homologação', 'Em produção', 'Obsoleto', 'Cancelado"'] }, //Indicador de ativo/inativo
  ic_ativo: { type: String, required: true, enum: ['S', 'N'] }, //Indicador de ativo/inativo
  dt_cadastro: { type: Date }, //Data do cadastro da aplicação
  dt_atualizacao: { type: Date, default: Date.now } //Data da última atualização
})

//Informações de metodologias de desenvolvimento utilizadas na empresa
const modeloMetricaSchema = new mongoose.Schema( {
  no_modeloMetricas: { type: String }, //Nome do modelo de métricas
  ic_tpUnAvaliada: { type: String, enum: ['Projeto', 'MVP', 'Entrega', 'Bloco', 'Sprint'] }, //Tipo de unidade avaliada
  ic_nesmaEst: { type: String, enum: ['O', 'M', '-', 'O*', 'M*'] }, //Indicador de uso do método NESMA de Estimativa
  ic_apfIfpug: { type: String, enum: ['O', 'M', '-', 'O*', 'M*'] }, //Indicador de uso do método APF-IFPUG
  ic_snap: { type: String, enum: ['O', 'M', '-', 'O*', 'M*'] }, //Indicador de uso do método SNAP
  ic_cosmic: { type: String, enum: ['O', 'M', '-', 'O*', 'M*'] }, //Indicador de uso do método COSMIC
  ic_localNesma: { type: String, enum: ['O', 'M', '-'] }, //Indicador de uso de diretrizes locais para o método
  ic_localIfpug: { type: String, enum: ['O', 'M', '-'] }, //Indicador de uso de diretrizes locais para o método
  ic_localSnap: { type: String, enum: ['O', 'M', '-'] }, //Indicador de uso de diretrizes locais para o método
  ic_localCosmic: { type: String, enum: ['O', 'M', '-'] }, //Indicador de uso de diretrizes locais para o método
  ic_prodCosmicRefNESMAEst: { type: String, enum: ['O', 'M', '-'] }, //Indicador de uso da NESMA Estimada como ref. produtividade p/ Cosmic
  ic_nivelEstimativaCosmic: { type: String, enum: ['Processo', 'Feature (P, M, G, GG)'] }, //Indicador do nível de granularidade/decomp. e modelo de estimativa
  ic_proposito1: { type: Number, min: 1, max: 4 }, //Podendo ser 1 - Contratação, 2 - Planejamento, 3 - Acompanhamento, 4 - Comparação com o passado
  ic_proposito2: { type: Number, min: 1, max: 4 }, //Podendo ser 1 - Contratação, 2 - Planejamento, 3 - Acompanhamento, 4 - Comparação com o passado
  ic_proposito3: { type: Number, min: 1, max: 4 }, //Podendo ser 1 - Contratação, 2 - Planejamento, 3 - Acompanhamento, 4 - Comparação com o passado
  ic_proposito4: { type: Number, min: 1, max: 4 }, //Podendo ser 1 - Contratação, 2 - Planejamento, 3 - Acompanhamento, 4 - Comparação com o passado
  ic_proposito5: { type: Number, min: 1, max: 4 }, //Podendo ser 1 - Contratação, 2 - Planejamento, 3 - Acompanhamento, 4 - Comparação com o passado
  ic_realizaLancamento: { type: String, enum: ['S', 'N'] }, //Parâmetro que especifica se deverá ocorrer lançamento p/ atualização do cumulative flow
  ds_urlProcesso: { type: String }, //URL de onde o processo está descrito
  ic_ativo: { type: String } //Indicador de ativo/inativo
})

//Informações de metodologias de desenvolvimento utilizadas na empresa
const metsDevSchema = new mongoose.Schema( {
  ic_tpMetodologiaGenerica: { type: String, required: true, enum: ['Tradicional', 'Tradicional - Iterativo', 'Ágil - Scrum', 'Ágil - Lean MVP'] }, //Modelo de desenvolvimento
  no_metodologia: { type: String }, //Nome da metodologia
  modelosMetricas: [ modeloMetricaSchema ], //Modelos de métricas utilizados no método de desenvolvimento
  dt_cadastro: { type: Date }, //Data do cadastro da metodologia
  dt_atualizacao: { type: Date, default: Date.now } //Data da última atualização do cadastro
})

//Informações da empresa
const empresaClienteSchema = new mongoose.Schema( {
  no_empresa: { type: String, required: [ true, 'Informe o nome da empresa.' ] }, //Nome da empresa
  nu_documento: { type: Number, index: {unique: true} }, //Número do documento
  no_pais: { type: String }, //Nome do país
  no_uf: { type: String }, //Nome da UF
  no_municipio: { type: String }, //Nome do município
  no_emailPrincipal: { type: String, index: { unique: true } }, //Caixa de e-mail principal da empresa
  portfolios: [ portfolioSchema ], //Áreas ou portfólios da empresa
  aplicacoes: [ aplicacaoSchema ], //Aplicações da empresa
  metodologias: [ metsDevSchema ], //Metodologias utilizadas pela empresa
  ds_coordenadasGeodesicas: { type: String }, //Localização da empresa
  ds_observacoes: { type: String }, //Observações sobre a empresa
  dt_cadastro: { type: Date }, //Data do cadastro da empresa
  dt_atualizacao: { type: Date, default: Date.now } //Data de atualização do cadastro da empresa
})

module.exports = restful.model('EmpresaCliente', empresaClienteSchema)

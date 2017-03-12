const restful = require('node-restful')
const mongoose = restful.mongoose

//ESPECIALISTA DA EMPRESA
const especialistaSchema = new mongoose.Schema( {
  no_especialista: { type: String, required: [ true, 'Informe o nome do especialista.' ] },
  ds_titulos: { type: String, required: true }, //Descrição dos títulos da assinatura do profissional
  id_usuario: { type: String, required: true }, //ID do usuário vinculado ao profisisonal
  ic_ativo: { type: Boolean }, //Indicador de situação do profissional
  tx_observacoes: { type: String, required: true }, //Observações a respeito do especialista
  //--Trilha
  dt_cadastro: { type: Date, default: Date.now } //Data de cadastro
})

//EQUIPE DA EMPRESA
const equipeSchema = new mongoose.Schema( {
  //--Dados básicos
  no_equipe: { type: String, required: [ true, 'Informe o nome da equipe.' ] }, //Nome da equipe
  no_emailEquipe: { type: String }, //Conta de e-mail padrão da equipe
  especialistas: [especialistaSchema], //Relação de especialistas da equipe
  ic_equipePadrao: { type: Boolean }, //Marca como equipe padrão
  ic_ativo: { type: Boolean }, //Situação da equipe
  //--Trilha
  dt_cadastro: { type: Date, default: Date.now } //Data de cadastro da equipe
})

//EMPRESA DE MÉTRICAS
const empresaMetricasSchema = new mongoose.Schema( {
  //--Dados básicos
  no_empresa: { type: String, required: [ true, 'Informe o nome da empresa.' ] }, //Nome da empresa
  nu_cnpj: { type: String, required: [ true, 'Informe o CNPJ da empresa.' ] }, //Número do CNPJ
  id_municipio: { type: mongoose.Schema.ObjectId, ref: 'municipio' }, //Município de endereço do contato
  no_emailEmpresaMetricas: { type: String, index: { unique: true } }, //E-mail padrão da empresa
  equipes: [equipeSchema], //Relação de equipes
  ic_parametroLancarHoras: { type: Boolean }, //Indica se a empresa de metricas faz seu controle de horas na plataforma
  ic_lancamentoHorasAberto: { type: Boolean }, //Indica se empresa cliente também pode ver os lançamentos
  tx_observacoes: { type: String }, //Observações e comentários sobre a empresa
  ic_ativo: { type: Boolean }, //Situação
  //--Trilha
  dt_cadastro: { type: Date, default: Date.now } // Data de cadastro da empresa
})

module.exports = restful.model('EmpresaMetricas', empresaMetricasSchema)

const restful = require('node-restful')
const mongoose = restful.mongoose

//Informações de especialistas da empresa
const especialistaSchema = new mongoose.Schema( {
  no_especialista: { type: String, required: [ true, 'Informe o nome do especialista.' ] },
  ds_titulos: { type: String, required: true }, //Descrição dos títulos da assinatura do profissional
  id_usuario: { type: String, required: true }, //ID do usuário vinculado ao profisisonal
  ic_situacao: { type: String, required: true }, //Indicador de situação do profissional
  tx_observacoes: { type: String, required: true }, //Observações a respeito do especialista
  dt_cadastro: { type: Date }, //Data do cadastro do profissional
  dt_atualizacao: { type: Date, default: Date.now } //Data da atualização do cadastro
})

//Informações de equipes da empresa
const equipeSchema = new mongoose.Schema( {
  no_equipe: { type: String, required: [ true, 'Informe o nome da equipe.' ] }, //Nome da equipe
  no_emailEquipe: { type: String }, //Conta de e-mail padrão da equipe
  especialistas: [especialistaSchema], //Relação de especialistas da equipe
  ic_equipePadrao: { type: String }, //Marca como equipe padrão
  ic_situacao: { type: String, required: true }, //Situação da equipe
  dt_cadastro: { type: Date }, //Data do cadastro da equipe
  dt_atualizacao: { type: Date, default: Date.now } //Data da atualização da equipe
})

//Informações da empresa de métricas
const empresaMetricasSchema = new mongoose.Schema( {
  no_empresa: { type: String, required: [ true, 'Informe o nome da empresa.' ] }, //Nome da empresa
  nu_cnpj: { type: String, required: [ true, 'Informe o CNPJ da empresa.' ] }, //Número do CNPJ
  no_emailEmpresaMetricas: { type: String, index: { unique: true } }, //E-mail padrão da empresa
  equipes: [equipeSchema], //Relação de equipes
  ic_parametroLancarHoras: { type: String, enum: ['S', 'N'] }, //Indica se a empresa de metricas faz seu controle de horas na plataforma
  ic_lancamentoHorasAberto: { type: String }, //Indica se empresa cliente também pode ver os lançamentos
  tx_observacoes: { type: String }, //Observações e comentários sobre a empresa
  dt_cadastro: { type: Date }, //Data de cadastro da empresa
  dt_atualizacao: { type: Date, default: Date.now } // Data da última atualização da empresa
})

module.exports = restful.model('EmpresaMetricas', empresaMetricasSchema)

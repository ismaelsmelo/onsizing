const restful = require('node-restful')
const mongoose = restful.mongoose

//PRIVILÉGIOS DE ACESSO DO USUÁRIO
const privilegioSchema = new mongoose.Schema( { //ver como se dará acesso por empresa e geral
  //--Dados básicos
  ic_perfil: { type: String, required: true, enum: [
    'Cliente - Gestor',
    'Cliente - Analista',
    'Fornecedor - Gestor',
    'Fornecedor - Analista',
    'Métricas - Gestor',
    'Métricas - Analista',
    'OS - Administrador',
    'OS - Comercial',
    'OS - Operador',
    'SISP - Auditor',
    'TCU/TCE - Auditor']}, //ID do perfil de acesso
  id_empresaCliente: { type: mongoose.Schema.ObjectId, ref: 'empresaCliente' }, //ID da empresa cliente
  id_empresaMetricas: { type: mongoose.Schema.ObjectId, ref: 'empresaMetricas' } //ID da empresa de métricas
})

//USUÁRIO
const usuarioSchema = new mongoose.Schema( {
  //--Dados básicos
  no_login: { type: String, required: [ true, 'Informe o login do usuário.' ] }, //Login do usuário
  ps_senha: { type: String, required: [ true, 'Informe a senha do usuário.' ] }, //Senha criptografada
  no_pessoa: { type: String, required: [ true, 'Informe um nome do usuário.' ] }, //Nome da pessoa
  nu_cpf: { type: Number, index: { unique: true } }, //Número do CPF da pessoa
  no_email: { type: String, required: [ true, 'Informe o e-mail do usuário.' ], index: { unique: true } }, //Informe o e-mail do usuário
  no_urlLinkedin: { type: String }, //Endereço do linkedin
  no_nickSkype: { type: String }, //Nickname do Skype
  id_municipio: { type: mongoose.Schema.ObjectId, ref: 'municipio' }, //Município de endereço do contato
  ic_aceiteTermoConf: { type: String, enum: ['', 'S', 'N'] }, //Aceito do usuário ao termo de confidencialidade
  privilegios: [ privilegioSchema ], //Privilégios (perfis) que o usuário poderá utilizar
  ic_ativo: { type: Boolean }, //Indicador de ativo/inativo
  //--Trilha
  dt_cadastro: { type: Date, default: Date.now } // Data do cadastro do usuário
})

module.exports = restful.model('Usuario', usuarioSchema)

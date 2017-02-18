const restful = require('node-restful')
const mongoose = restful.mongoose

//Informações de privilégios (acessos) do usuário
const privilegioSchema = new mongoose.Schema( { //ver como se dará acesso por empresa e geral
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
  id_empresa: { type: String } //ID da empresa a qual o usuário está vinculado com base no respectivo perfil
})

//Informações do usuário
const usuarioSchema = new mongoose.Schema( {
  no_login: { type: String, required: [ true, 'Informe o login do usuário.' ] }, //Login do usuário
  ps_senha: { type: String, required: [ true, 'Informe a senha do usuário.' ] }, //Senha criptografada
  no_pessoa: { type: String, required: [ true, 'Informe um nome do usuário.' ] }, //Nome da pessoa
  no_email: { type: String, required: [ true, 'Informe o e-mail do usuário.' ], index: { unique: true } }, //Informe o e-mail do usuário
  nu_cpf: { type: Number, index: { unique: true } }, //Número do CPF da pessoa
  ic_termoConfidencialidade: { type: String, enum: ['S', 'N'] }, //Aceito do usuário ao termo de confidencialidade
  no_urlLinkedin: { type: String }, //Endereço do linkedin
  no_nickSkype: { type: String }, //Nickname do Skype
  privilegios: [ privilegioSchema ], //Privilégios (perfis) que o usuário poderá utilizar
  ic_ativo: { type: String, required: true, enum: ['S', 'N'] }, //Indicador de ativo/inativo
  dt_cadastro: { type: Date }, //Data de cadastro do usuário
  dt_atualizacao: { type: Date, default: Date.now } // Data da última atualização do usuário
})

module.exports = restful.model('Usuario', usuarioSchema)

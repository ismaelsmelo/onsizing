const restful = require('node-restful')
const mongoose = restful.mongoose

const privilegioSchema = new mongoose.Schema( { //ver como se dará acesso por empresa e geral
  ic_perfil: { type: String, required: true },
  id_empresa: { type: String }
})

const usuarioSchema = new mongoose.Schema( {
  no_login: { type: String, required: [ true, 'Informe o login do usuário.' ] },
  no_pessoa: { type: String, required: [ true, 'Informe um nome do usuário.' ] },
  ps_senha: { type: String, required: [ true, 'Informe a senha do usuário.' ] },
  nu_cpf: { type: String },
  privilegios: [ privilegioSchema ],
  ic_ativo: { type: String, required: true, enum: ['S', 'N'] },
  dt_cadastro: { type: Date },
  dt_atualizacao: { type: Date, default: Date.now }
})

module.exports = restful.model('Usuario', usuarioSchema)

//Perfis:
// - Empresa cliente - Gestor
// - Empresa cliente - Analista
// - Empresa fornecedor - Gestor
// - Empresa fornecedor - Analista
// - Empresa Métricas - Gestor
// - Empresa Métricas - Analista
// - OnSizing - Administrador
// - OnSizing - Operador
// - SISP - Auditor
// - TCU/TCE - Auditor

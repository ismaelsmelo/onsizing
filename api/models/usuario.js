const restful = require('node-restful')
const mongoose = restful.mongoose

const Usuario_Schema = new mongoose.Schema( {
  no_login: { type: String, required: [ true, 'Informe o login do usuário.' ] },
  no_pessoa: { type: String, required: [ true, 'Informe um nome do usuário.' ] },
  ps_senha: { type: String, required: [ true, 'Informe a senha do usuário.' ] },
  ic_ativo: { type: String, required: true, enum: ['S', 'N'] }
})

module.exports = restful.model('Usuario', Usuario_Schema)

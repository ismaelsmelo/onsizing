const restful = require('node-restful')
const mongoose = restful.mongoose

const Auditoria_Schema = new mongoose.Schema( {
  id_usuario: { type: String, required: [ true, 'Informe o código do usuário.' ] }
})

module.exports = restful.model('Auditoria', Auditoria_Schema)

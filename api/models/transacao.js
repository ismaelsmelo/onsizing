const restful = require('node-restful')
const mongoose = restful.mongoose

const Transacao_Schema = new mongoose.Schema( {
  co_transacao: { type: String, required: [ true, 'Informe o código da transação.' ] },
  ds_transacao: { type: String, required: [ true, 'Informe a descrição da transação.' ] }
})

module.exports = restful.model('Transacao', Transacao_Schema)

const restful = require('node-restful')
const mongoose = restful.mongoose

const tipoAplicacaoSchema = new mongoose.Schema( {
  no_tpAplicacao: { type: String, required: true }
})

module.exports = restful.model('TipoAplicacao', tipoAplicacaoSchema)

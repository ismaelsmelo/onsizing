const restful = require('node-restful')
const mongoose = restful.mongoose

//TIPO DE APLICAÇÃO
const tipoAplicacaoSchema = new mongoose.Schema( {
  //--Dados básicos
  no_tpAplicacao: { type: String, required: true },
  ic_ativo: { type: Boolean }
})

module.exports = restful.model('TipoAplicacao', tipoAplicacaoSchema)

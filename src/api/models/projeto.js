const restful = require('node-restful')
const mongoose = restful.mongoose

const projetoSchema = new mongoose.Schema( {
  co_projeto: { type: String, required: [true, 'Informe o código do projeto'] },
  no_projeto: { type: String, required: [true, 'Informe o nome do projeto'] }
)}

module.exports.model('projeto', projetoSchema)

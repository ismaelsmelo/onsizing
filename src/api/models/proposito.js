const restful = require('node-restful')
const mongoose = restful.mongoose

const propositoSchema = new mongoose.Schema( {
  no_proposito: { type: String, required: true },
  ic_ativo: { type: String, required: true, enum: ['S', 'N'] }
)}

module.exports.model('proposito', propositoSchema)

const restful = require('node-restful')
const mongoose = restful.mongoose

const timeSchema = new mongoose.Schema( {
  co_time: { type: String, required: true },
  no_time: { type: String, required: true },
  ic_modelo: { type: String, required: true, enum: ['Ágil', 'Híbrido'] },
  ic_ativo: { type: String, required: true, enum: ['S', 'N'] }
)}

module.exports.model('time', timeSchema)

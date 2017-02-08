const restful = require('node-restful')
const mongoose = restful.mongoose

const Prospecto_Schema = new mongoose.Schema( {
  co_prospecto: { type: String, required: [ true, 'Informe o código do prospecto.' ] },
  no_prospecto: { type: String, required: [ true, 'Informe o nome do prospecto.' ] }
  ds_prospecto: { type: String }
  lances: {}
  ic_situacao: { type: String, required: [ true, 'Informe a situação do prospecto.' ] }
})

module.exports = restful.model('Prospecto', Prospecto_Schema)

const restful = require('node-restful')
const mongoose = restful.mongoose

//Informações de plataformas
const tecnologiaSchema = new mongoose.Schema( {
  no_tecnologia: { type: String, required: true }, //Nome da tecnologia
  ic_tpTecnologia: { type: String }, //Tipo de tecnologia
  ic_situacao: { type: String, required: true, enum: ['Linguagem', 'Database', 'S.O.', 'Outra'] }, //Situação do projeto
  dt_cadastro: { type: Date }, //Data de cadastro do projeto
  dt_atualizacao: { type: Date, default: Date.now } //Data da última atualização do projeto
})

//Informações de tecnologias
const plataformaSchema = new mongoose.Schema( {
  id_empresaCliente: { type: mongoose.Schema.ObjectId, ref: 'empresaCliente' },
  no_plataforma: { type: String, required: true }, //Nome da plataforma
  tecnologias: [ tecnologiaSchema ], //Tecnologias que formam a plataforma
  ic_ativo: { type: String, required: true, enum: ['S', 'N'] }, //Situação do projeto
  dt_cadastro: { type: Date }, //Data de cadastro do projeto
  dt_atualizacao: { type: Date, default: Date.now } //Data da última atualização do projeto
})

module.exports = restful.model('Plataforma', plataformaSchema)

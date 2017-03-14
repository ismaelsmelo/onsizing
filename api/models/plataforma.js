const restful = require('node-restful')
const mongoose = restful.mongoose

//TECNOLOGIA DA PLATAFORMA
const tecnologiaVinculadaSchema = new mongoose.Schema( {
  //--Dados básicos
  id_tecnologia: { type: mongoose.Schema.ObjectId, ref: 'tecnologia' }, //Tecnologia vinculada
  ic_tecPredominante: { type: Boolean } //Indicador de tecnologia predominante na plataforma
})

//PLATAFORMA
const plataformaSchema = new mongoose.Schema( {
  //--Dados básicos
  id_empresaCliente: { type: mongoose.Schema.ObjectId, ref: 'empresaCliente' },
  no_plataforma: { type: String, required: true }, //Nome da plataforma
  tecnologias: [ tecnologiaVinculadaSchema ], //Tecnologias que formam a plataforma
  ic_arquitetura: { type: String, required: true },
  ic_ativo: { type: Boolean, required: true }, //Situação do cadastro de plataforma
  //--Trilha
  dt_cadastro: { type: Date, default: Date.now } //Data do cadastro da plataforma
})

module.exports = restful.model('Plataforma', plataformaSchema)

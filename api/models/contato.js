const restful = require('node-restful')
const mongoose = restful.mongoose

//HISTÓRICO DO CONTATO
const historicoSchema = new mongoose.Schema( {
  //--Dados básicos
  ic_tpHistorico: { type: String }, //Tipo de lancamento de histórico
  dh_historico: { type: Date }, //Dia e hora do contato ou fato que foi realizado
  no_assunto: { type: String }, //Nome do assunto sendo tratado
  ic_tpContatoRealizado: { type: String, enum: ['Pessoal (fisicamente)', 'Telefone', 'Confererência', 'E-mail', 'Requisição', 'Outro'] },
  no_local: { type: String }, //Nome do local onde ocorreu o contato
  //--Observações
  tx_observacoes: { type: String } //Observações do contato realizado
})

const telefoneContatoSchema = new mongoose.Schema( {
  //--Dados básicos
  nu_telefone: { type: Number }, //Telefone do contato
})

//CONTATO
const contatoSchema = new mongoose.Schema( {
  //--Dados básicos
  ic_tpEmpresa: { type: String, enum: ['', 'Cliente', 'Fornecedor', 'Métricas', 'Qualidade'] }, //Tipo de Empresa
  id_empresaCliente: { type: mongoose.Schema.ObjectId, ref: 'empresaCliente' }, //ID da empresa (de for informada a empresa do contato)
  id_empresaMetricas: { type: mongoose.Schema.ObjectId, ref: 'empresaMetricas' }, //ID da empresa (de for informada a empresa do contato)
  id_usuario: { type: mongoose.Schema.ObjectId, ref: 'usuario' }, //ID do usuário, caso possua cadastro
  no_contato: { type: String }, //Nome do contato
  no_email: { type: String, index: { unique: true } }, //E-mail do contato
  //Telefones do Contato
  telefones: [ telefoneContatoSchema ],
  //--Endereço do Contato
  ds_endereco: { type: String }, //Endereço do contato
  id_municipio: { type: mongoose.Schema.ObjectId, ref: 'municipio' }, //Município de endereço do contato
  ds_coordenadasGeodesicas: { type: String }, //Coordenadas da localização do contato
  //--Histórico do Contato
  historicos: [historicoSchema], //Histórico do contato
  //--Observações do Contato
  tx_observacoes: { type: String }, //Observações
  //--Trilha
  dt_cadastro: { type: Date }, //Data do cadastro do contato
  dt_atualizacao: { type: Date, default: Date.now } //Data da atualização do cadastro do contato
})

module.exports = restful.model('Contato', contatoSchema)

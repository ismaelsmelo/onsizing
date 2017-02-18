const restful = require('node-restful')
const mongoose = restful.mongoose

const historicoSchema = new mongoose.Schema( {
  ic_tpHistorico: { type: String }, //Tipo de lancamento de histórico
  dh_historico: { type: Date }, //Dia e hora do contato ou fato que foi realizado
  no_assunto: { type: String }, //Nome do assunto sendo tratado
  ic_tpContatoRealizado: { type: String, enum: ['Pessoal (fisicamente)', 'Telefone', 'E-mail', 'Requisição', 'Outro'] },
  no_local: { type: String }, //Nome do local onde ocorreu o contato
  tx_observacoes: { type: String } //Observações do contato realizado
})

//Informações do contato
const contatoSchema = new mongoose.Schema( {
  ic_tpEmpresa: { type: String, enum: ['', 'Cliente', 'Fornecedor', 'Métricas', 'Qualidade'] }, //Tipo de Empresa
  id_empresa: { type: mongoose.Schema.ObjectId, ref: 'empresaCliente' }, //ID da empresa (de for informada a empresa do contato)
  no_contato: { type: String }, //Nome do contato
  no_email: { type: String, index: { unique: true } }, //E-mail do contato
  id_usuario: { type: mongoose.Schema.ObjectId, ref: 'usuario' }, //ID do usuário, caso possua cadastro
  nu_telefone1: { type: Number }, //Telefone do contato
  nu_telefone2: { type: Number }, //Telefone do contato
  ds_endereco: { type: String }, //Endereço do contato
  no_municipio: { type: String }, //Município de endereço do contato
  sg_uf: { type: String }, //Sigla da UF do contato
  no_pais: { type: String }, //Nome do país
  ds_coordenadasGeodesicas: { type: String }, //Coordenadas da localização do contato
  tx_observacoes: { type: String }, //Observações
  historicos: [historicoSchema], //Histórico do contato
  dt_cadastro: { type: Date }, //Data do cadastro do contato
  dt_atualizacao: { type: Date, default: Date.now } //Data da atualização do cadastro do contato
})

module.exports = restful.model('Contato', contatoSchema)

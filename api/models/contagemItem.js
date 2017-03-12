const restful = require('node-restful')
const mongoose = restful.mongoose

//EVIDÊNCIAS DO ITEM
const evidenciaSchema = new mongoose.Schema( {
  //--Dados básicos
  no_evidencia: { type: String }, //Nome da evidência
  tx_evidencia: { type: String } //Comentário/ observações sobre a evidência
})

//MOVIMENTO DE DADOS DO ITEM
const movimentoDeDadoSchema = new mongoose.Schema( {
  //--Dados básicos
  ic_tipo: { type: String, enum: ['E', 'X', 'R', 'W']}, //Tipo de movimento de dado
  no_movimento: { type: String }, //Nome do movimento de dado
  ic_local: { type: String, enum: ['S', 'N'] } //Indicação de contagem devido à uma regra local
})

//ALR OU RLR DO ITEM CONTADO
const alrOuRlrSchema = new mongoose.Schema( {
  //--Dados básicos
  no_alrOuRlr: { type: String }, //Nome do ALR ou RLR do item contado
  tx_observacoes: { type: String } //Observações sobre o ALR ou RLR do item contado
})

//DER DO ITEM CONTADO
const derSchema = new mongoose.Schema( {

})

//ITEM DA CONTAGEM
const contagemItemSchema = new mongoose.Schema( {
  //--Contexto
  id_operacao: { type: mongoose.Schema.ObjectId, ref: 'operacao' }, //Operação
  id_proposito: { type: String }, //Propósito da contagem
  id_metodo: { type: String }, //Método utilizado
  //--Dados básicos
  id_fronteira: { type: mongoose.Schema.ObjectId, ref: 'fronteira' }, //Fronteira
  id_sistema: { type: String }, //Sistema
  id_macroprocesso: { type: String }, //Macroprocesso
  no_itemContagem: { type: String, required: [ true, 'Favor informar o nome do item da contagem'] }, //Nome do item da contagem
  ic_tpItemContagem: { type: String }, //Tipo de item da contagem
  ic_ordenadorManual: { type: Number }, //Ordenador manual do registro
  //--APF NESMA Estimativa
  ic_tpFuncaoNesmaEst: { type: String }, //Tipo de função na NESMA Est.
  ic_tpFatorConvencaoNesmaEst: { type: String, enum: [ 'Fixo', 'Variável' ] }, //Tipo de fator por convenção p/ NESMA Est.
  vr_fatorConvencaoNesmaEst: { type: mongoose.Schema.Types.Decimal }, //Valor do fator
  qt_pontosNesmaEst: { type: mongoose.Schema.Types.Decimal }, //Quantidade de pontos após aplicação do fator
  //--APF IFPUG
  ic_tpFuncaoApfIfpug: { type: String }, //Tipo de função na APF IFPUG
  alrsOuRlr: [ alrOuRlrSchema ], //Relação de ALRs (atualiza o campo qt_alrOuRlr)
  qt_alrOuRlr: { type: Number }, //Quantidade de ALR/RLR
  tx_alrOuRlr: { type: String }, //Texto comentando os ALR/DERs
  ders: [ derSchema ], //Relação de DERS (atualiza o campo qt_der)
  qt_der: { type: Number }, //Quantidade de DERs (informado diretamente ou através do preenchimento da relação)
  tx_der: { type: String }, //Texto comentando os DERs
  ic_diretrizIfpug: { type: Boolean }, //Indicador de diretriz do IFPUG
  ic_tpFatorConvencaoIfpug: { type: String, enum: [ 'Fixo', 'Variável' ] }, //Tipo de fator por convenção p/ IFPUG
  vr_fatorConvencaoIfpug: { type: mongoose.Schema.Types.Decimal }, //Valor do fator
  qt_pontosIfpug: { type: mongoose.Schema.Types.Decimal }, //Quantidade de pontos após aplicação do fator
  //--APF COSMIC
  id_usuarioFronteira: { type: String }, //Usuário da fronteira que utiliza o processo
  movimentosDeDados: [ movimentoDeDadoSchema ], //Relação de movimentos de dados
  qt_movimentos: { type: Number }, //Quantidade de movimentos
  ic_diretrizCosmic: { type: Boolean }, //Diretriz do COSMIC
  ic_tpFatorConvencaoCosmic: { type: String, enum: [ 'Fixo', 'Variável' ] }, //Tipo de fator por convenção p/ COSMIC
  vr_fatorConvencaoCosmic: { type: mongoose.Schema.Types.Decimal }, //Valor do fator
  qt_pontosCosmic: { type: mongoose.Schema.Types.Decimal }, //Quantidade de pontos após aplicação do fator
  //--SNAP
  ic_categoriaSnap: { type: String }, //Categoria do SNAP
  ic_subcategoriaSnap: { type: String }, //Subcategoria do SNAP
  ic_opcaoSnap: { type: String }, //Opção do SNAP
  qt_ps: { type: String }, //Quantidade de pontos SNAP (bruto)
  tx_obsSnap: { type: String }, //Observação SNAP
  ic_tpFatorConvencaoSnap: { type: String, enum: [ 'Fixo', 'Variável' ] }, //Tipo de fator por convenção p/ SNAP
  vr_fatorConvencaoSnap: { type: mongoose.Schema.Types.Decimal }, //Valor do fator
  qt_pontosSnap: { type: mongoose.Schema.Types.Decimal }, //Quantidade de pontos após aplicação do fator
  //--Convenção
  id_tpConvencao: { type: String }, //Tipo de convenção utilizada (diretriz local)
  evidencias: [ evidenciaSchema ], //Evidências de contagem
  tx_observacoes: { type: String }, //Observações da contagem
  //--Trilha
  dt_cadastro: { type: Date, default: Date.now } //Data de cadastro da empresa como fornecedor
})

module.exports = restful.model('ContagemItem', contagemItemSchema)

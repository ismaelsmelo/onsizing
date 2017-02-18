const restful = require('node-restful')
const mongoose = restful.mongoose

//Informações de contagem no modelo tradicional de desenvolvimento
const reqContagemSchema = new mongoose.Schema ( {
  ic_proposito: { type: String, required: true }, //Tipo de propósito da contagem
  id_usuarioResponsavel: { type: mongoose.Schema.ObjectId, ref: 'usuario', required: true }, //ID do usuário responsável
  id_metDev: { type: String }, //Método de desenvolvimwento
  id_modeloMetricas: { type: String }, //Modelo de contagem
  id_time: { type: String, required: true }, //ID do time
  id_fronteira: { type: mongoose.Schema.ObjectId, ref: 'fronteira', required: true }, //ID da fronteira (produto)
  tx_contagem: { type: String }, //Descrição da contagem
  ic_situacao: { type: String, required: true }, //Situação da contagem
  tc_observacoes: { type: String }, //Observações sobre a contagem
  tx_documentacao: { type: String }, //URL ou outra referência p/ a documentação relacionada
  dt_cadastro: { type: Date }, //Data do cadastro do bloco de trabalho
  dt_atualizacao: { type: Date, default: Date.now } //Data da última atualização do cadastro do bloco de trabalho
})

//Informações de apoios realizados
const reqApoioSchema = new mongoose.Schema ( {
  id_usuarioResponsavel: { type: mongoose.Schema.ObjectId, ref: 'usuario', required: true }, //ID do usuário responsável
  ic_tipoApoio: { type: String, required: true }, //Tipo de apoio realizado
  tx_apoio: { type: String }, //Descrição do apoio
  tx_retornoApoio: { type: String }, //Retorno para o apoio ou resposta à requisição
  tx_documentacao: { type: String } //URL ou outra referência p/ a documentação relacionada
})

//Informações de treinamentos realizados
const reqTreinamentoSchema = new mongoose.Schema ( {
  no_treinamento: { type: String, required: true }, //Nome do treinamento
  ds_treinamento: { type: String, required: true }, //Descrição do treinamento
  id_usuarioResponsavel: { type: mongoose.Schema.ObjectId, ref: 'usuario', required: true }, //ID do usuário responsável
  qt_horasTreinamento: { type: String, required: true }, //Carga horária do treinamento
  tx_documentacao: { type: String } //URL ou outra referência p/ a documentação relacionada
})

//Informações de relatórios, boletins ou parecer de becnhmarking
const reqBenchmarkingSchema = new mongoose.Schema ( {
  ic_tipoRelatorio: { type: String, required: true }, //Tipo de relatório
  id_usuarioResponsavel: { type: mongoose.Schema.ObjectId, ref: 'usuario', required: true }, //ID do usuário responsável
  tx_documentacao: { type: String } //URL ou outra referência p/ a documentação relacionada
})

//Informações de requisições de contato (registrados via site, por exemplo)
const reqContatoSchema = new mongoose.Schema ( {
  ic_motivoContato: { type: String, required: true }, //Motivo do contato
  ic_canalOrigem: { type: String, required: true }, //Tipo de canal de origem da requisição
  tx_necessidade: { type: String, required: true }, //Descrição da necessidade
  tx_retornoContato: { type: String }, //Descrição do retorno do contato
  id_usuarioResponsavel: { type: mongoose.Schema.ObjectId, ref: 'usuario', required: true }, //ID do usuário responsável
  tx_documentacao: { type: String } //URL ou outra referência p/ a documentação relacionada
})

//Informações sobre lançamento de horas das membros da equipe
const lancamentoSchema = new mongoose.Schema ( {
  id_empresaMetricas: { type: mongoose.Schema.ObjectId, ref: 'empresaMetricas', required: true }, //ID da empresa de métricas
  id_equipeEmpresaMetricas: { type: String },  //ID da equipe da empresa de métricas
  id_usuarioResponsavel: { type: mongoose.Schema.ObjectId, ref: 'usuario', required: true }, //ID do usuário responsável
  ic_tpLancamento: { type: String, required: true }, //Tipo de lançamento
  dt_lancamento: { type: Date, required: true }, //Data do lançamento
  hh_inicio: { type: String, required: true }, //Horário inicial
  hh_fim: { type: String, required: true }, //Horário final
  id_usuario: { type: mongoose.Schema.ObjectId, ref: 'usuario', required: true }, //ID do usuário que criou o registro
  id_usuarioAlterou: { type: mongoose.Schema.ObjectId, ref: 'usuario', required: true }, //ID do usuário que alterou o registro
  dh_alteracao: { type: Date } //Data de alteração do lançamento
})

//Informações gerais da requisição
const requisicaoSchema = new mongoose.Schema( {
  co_requisicao: { type: String, required: true }, //Código da requisição
  id_prospecto: { type: mongoose.Schema.ObjectId, ref: 'prospecto', required: true }, //ID do prospecto
  id_empresaCliente: { type: mongoose.Schema.ObjectId, ref: 'empresaCliente', required: true }, //ID da empresa cliente
  id_empresaMetricas: { type: mongoose.Schema.ObjectId, ref: 'empresaMetricas', required: true }, //ID da empresa de métricas
  id_usuarioSolicitante: { type: mongoose.Schema.ObjectId, ref: 'usuario', required: true }, //ID do usuário solicitante
  id_usuarioResponsavel: { type: mongoose.Schema.ObjectId, ref: 'usuario', required: true }, //ID do usuário responsável
  id_equipeEmpresaMetricas: { type: mongoose.Schema.ObjectId, ref: 'empresaMetricas', required: true, required: true  }, //ID da equipe da empresa de métricas
  contagens: [ reqContagemSchema ], //contagens no modelo ágil ou similares
  apoios: [ reqApoioSchema ], //requisições de apoio
  treinamentos: [ reqTreinamentoSchema ], //requisições de treinamentos
  benchmarkings: [ reqBenchmarkingSchema ], //requisições que envolvem benchmarking
  contatos: [ reqContatoSchema ], //requisições de contato
  dh_abertura: { type: Date, required: true }, //Data e hora da abertura da requisição
  dh_primeiroAtendimento: { type: Date }, //Data e hora do primeiro atendimento
  dh_conclusao: { type: Date }, //Data e hora da conclusão do atendimento
  dh_fechamento: { type: Date }, //Data e hora do fechamento do atendimento
  dh_fim: { type: Date, required: true }, //Data fim do atendimento
  ic_situacao: { type: String, required: true }, //Situação da requisição
  tx_parecer: { type: String }, //Descrição do parecer
  lancamentos: [ lancamentoSchema ], //Relação de lançamentos da requisição
  dt_atualizacao: { type: Date, default: Date.now }, //Data da última atualização
  id_usuarioAlterou: { type: mongoose.Schema.ObjectId, ref: 'usuario' } //ID do último usuário que alterou
})

module.exports = restful.model('Requisicao', requisicaoSchema)

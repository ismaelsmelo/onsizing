const mongoose = require('mongoose')
//module.exports = mongoose.connect('mongodb://localhost:27017/db_base')
module.exports = mongoose.connect('mongodb://ismaelsmelo:Eufrates@161005@ds113938.mlab.com:13938/onsizing_base')

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."

const Time = require('../models/time')
const _ = require('lodash')

//permitir consultar, incluir, alterar e excluir
Time.methods(['get', 'post', 'put', 'delete'])

//sempre que dar update retornará o objeto novo e não o objeto antigo / e fazer validações também ao fazer update
Time.updateOptions( { new: true, runValidators: true } )
Time.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next) {
  const bundle = res.locals.bundle

  if(bundle.errors) {
    var errors = parseErrors(bundle.errors)
    res.status(500).json({errors})
  } else {
    next()
  }
}

function parseErrors(nodeRestfulErrors) {
  const errors = []
  _.forIn(nodeRestfulErrors, error => errors.push(error.message))
  return errors
}

Time.route('count', function(req, res, next) {
  //verifica retorno do DB de quantas registros temos cadastrados (e se houve erros, colocaremo-os num array, senão retorna resposta)
  Time.count(function(error, value) {
    if(error) {
      res.status(500).json( {errors: [error]} )
    } else {
      res.json( {value} )
    }
  })
})

module.exports = Time

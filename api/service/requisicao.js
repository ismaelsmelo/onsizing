const requisicao = require('../models/requisicao')
const _ = require('lodash')

requisicao.methods(['get', 'post', 'put', 'delete'])
requisicao.updateOptions( { new: true, runValidators: true } )

requisicao.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

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

requisicao.route('count', function(req, res, next) {
  requisicao.count(function(error, value) {
    if(error) {
      res.status(500).json( {errors: [error]} )
    } else {
      res.json( {value} )
    }
  })
})

module.exports = requisicao

const Auditoria = require('../models/auditoria')
const _ = require('lodash')

Auditoria.methods(['get', 'post', 'put', 'delete'])
Auditoria.updateOptions( { new: true, runValidators: true } )

Auditoria.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

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

Auditoria.route('count', function(req, res, next) {
  Auditoria.count(function(error, value) {
    if(error) {
      res.status(500).json( {errors: [error]} )
    } else {
      res.json( {value} )
    }
  })
})

module.exports = Auditoria

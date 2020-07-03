module.exports.callbackify = (promise, done) ->
  promise.then ((result) -> done(undefined, result)), ((error) -> done(error))

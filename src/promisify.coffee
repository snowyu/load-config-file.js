module.exports.promisify = (fn, ctx) =>
  ()->
    ctx = ctx || this
    args = Array::slice.call(arguments)
    new Promise (resolve, reject)->
      done = (err, results...) ->
        if err then return reject err
        resolve if results && results.length is 1 then results[0] else results
      # push the last done function
      args.push done
      fn.apply ctx, args
      return

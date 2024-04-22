const slice = [].slice;

export function promisify(fn, ctx) {
  return function() {
    ctx = ctx || this;
    const args = Array.prototype.slice.call(arguments);
    return new Promise(function(resolve, reject) {
      function done() {
        var err, results;
        err = arguments[0], results = 2 <= arguments.length ? slice.call(arguments, 1) : [];
        if (err) {
          return reject(err);
        }
        return resolve(results && results.length === 1 ? results[0] : results);
      };
      args.push(done);
      fn.apply(ctx, args);
    });
  };
};

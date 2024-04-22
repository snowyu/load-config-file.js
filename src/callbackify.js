export function callbackify(promise, done) {
  return promise.then((function(result) {
    return done(undefined, result);
  }), (function(error) {
    return done(error);
  }));
};

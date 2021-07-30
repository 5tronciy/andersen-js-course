function foo(x, cb) {
  if (x > 10) {
    cb();
    return console.log('x > 10');
  }
  return console.log('x <= 10');
}

function createCb(str) {
  return () => console.log(str);
}

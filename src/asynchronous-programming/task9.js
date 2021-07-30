const asyncBar = async () => 'Some string!';

async function foo() {
  const msg = await asyncBar();
  return console.log(msg);
}

foo();

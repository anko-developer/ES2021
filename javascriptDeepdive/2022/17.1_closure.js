// to rest

function foo() {
  let x = 1;
  const y = 2;

  function bar() {
    x += 1;
    console.log(x);
    debugger;
  }
œ
  return bar;
}

const test = foo();
test();
test();
test();
test();
test();
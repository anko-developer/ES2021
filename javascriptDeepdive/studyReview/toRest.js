(function() {
  const obj = {
    [Symbol.for('name')]: 'anko',
    [Symbol.for('age')]: '5'
  };

  const objTest = {
    [Symbol.for('name')]: 'good',
  }

  console.log(obj[Symbol.for('name')]);
  console.log(objTest[Symbol.for('name')]);
  
  for (const key in obj) {
    console.log(key);
  }
  console.log(Object.getOwnPropertySymbols(obj)[0]); // Symbol(name)
  const symbolTest = Object.getOwnPropertySymbols(obj)[0];
  console.log(obj[symbolTest]); // anko

  console.log(...Array.from({length:2, 0: '1', 1: '2'}));

  function foo(a, ...rest) {
    console.log(a, rest);
  }

  foo('가', 3,3,4,4,5,3,2);

  const test = [1,2, ...[3,4]];
  console.log(test);

  const testObj = {
    a: 'test1', // 이부분은 깊은 복사 가능
    b: { // 한단계 더 deep 해지면 spread 문법으로 깊은 복사가 안됨 ß
      aa: 'test2'
    }
  };

  const testObjResult = {
    ...testObj
  };

  testObjResult.a = 'test3';

  console.log(testObj.a);
  console.log(testObjResult.a);
}());
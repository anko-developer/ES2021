(function () {
  // 1. 함수는 무명의 리터럴로 생성할 수 있다.
  // 2. 함수는 변수에 저장할 수 있다.
  const increase = function (num) {
    return ++num;
  };

  const decrease = function (num) {
    return --num;
  };

  // 2. 함수는 객체에 저장할 수 있다.
  const predicates = {
    increase,
    decrease
  };

  // 3. 함수의 매개변수에 전달할 수 있다.
  // 4. 함수의 반환값으로 사용할 수 있다.
  function makeCounter(predicate) {
    let num = 0;

    return function () {
      num = predicate(num);
      return num;
    };
  }

  // 3. 함수는 매개변수에게 함수를 전달할 수 있다.
  const increaser = makeCounter(predicates.increase);
  console.log(increaser()); // 1
  console.log(increaser()); // 2

  // 3. 함수는 매개변수에게 함수를 전달할 수 있다.
  const decreaser = makeCounter(predicates.decrease);
  console.log(decreaser()); // -1
  console.log(decreaser()); // -2

  console.log(Object.getOwnPropertyDescriptors(makeCounter));

  function wow(a, b) {
    console.log('test', arguments.callee); // arguments를 호출한 함수 wow()를 반환
    return a * b;
  }

  console.log(wow(1, 2, 3));

  function multiply(x, y) {
    const iterator = arguments[Symbol.iterator]();

    console.log(iterator.next()); // {value: 1, done: false}
    console.log(iterator.next()); // {value: 2, done: false}
    console.log(iterator.next()); // {value: 3, done: false}
    console.log(iterator.next()); // {value: undefined, done: true}

    return x * y;
  }

  multiply(1, 2, 3);
})();

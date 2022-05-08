(function () {
  'use strict';

  // ES5
  const x = 1, y = 2;
  const obj = {
    x : x,
    y : y
  };

  console.log(obj);

  // ES6 프로퍼티 축약 표현
  // 변수 이름과 프로퍼티 키가 동일한 이름일 때 프로퍼티 키를 생략 할 수 있다.
  const c = 1, d = 2;
  const obj2 = {
    c,
    d
  };

  console.log(obj2);
})();

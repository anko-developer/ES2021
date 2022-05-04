(function () {
  'use strict';

  // boolean
  // 주어진 인자가 Falsy 값이면 true, Truthy 값이면 false를 반환한다.
  function isFalsy(v) {
    return !v;
  }

  // 주어진 인자가 Truthy 값이면 true, Falsy 값이면 false를 반환한다.
  function isTruthy(v) {
    return !!v; // !! 는 불리언 타입으로 변경해줌
  }

  console.log(isFalsy(0));
  console.log(isTruthy('t'));

  // 단축평가
  // null.value 자체로는 타입 에러가 나지만
  // 단축평가에서는 에러가 나지 않는다.
  const nullTest = null;
  console.log(nullTest.value); // typeError
  console.log(nullTest && nullTest.value); // null

  // 단축 평가를 사용한 매개변수의 기본값 설정
  function getStringLength(str) {
    str = str || '';
    return str.length;
  }

  getStringLength(); // 0
  getStringLength('hi'); // 2

  // ES6의 매개변수의 기본값 설정
  function getStringLength(str = '') {
    return str.length;
  }

  getStringLength(); // 0
  getStringLength('hi'); // 2
})();

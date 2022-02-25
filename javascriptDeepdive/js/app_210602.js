(function() {
  'use strict';

  // ES11에 도입된 null 병합 연산자 ??는 좌항의 피연산자가 null 또는 undefined인 경우 우항의 피연산자를 반환,
  // 그렇지 않으면 좌항의 피연산자를 반환한다.
  let foo = undefined ?? '병합 연산자';
  let foo1 = null ?? '병합 연산자1';
  console.log(foo);
  console.log(foo1);
}());
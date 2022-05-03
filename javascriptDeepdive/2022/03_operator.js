(function() {
  'use strict';
  
  // 논리 연산자로 구성된 복잡한 표현식은 가독성이 좋지 않아 한눈에 이해하기 어렵다.
  // 이러한 경우 드 모르간의 법칙을 활용하면 복잡한 표현식을 좀 더 가독성 좋은 표현식으로 변환할 수 있다.
  let x = 1;
  let y = 2;
  console.log(!(x || y) === (!x && !y)); // true
  console.log(!(x && y) === (!x || !y)); // true
  

  // 지수 연산자 (ES7)
  // https://ourcalc.com/%EA%B1%B0%EB%93%AD%EC%A0%9C%EA%B3%B1-%EA%B3%84%EC%82%B0%EA%B8%B0/
  console.log(2 ** 2); // 4
  console.log(2 ** -2); // 0.25

  // 지수 연산자 도입 전에는 Math.pow 메서드를 사용했다.
  console.log(Math.pow(2, 2)); // 4
  console.log(Math.pow(2,  -2)); // 0.25

  // 음수를 거듭제곱의 밑으로 사용해 계산하려면 다음과 같이 괄호로 묶어야 함
  // -5 ** 2; // error
  console.log((-5) ** 2); // 25
})();
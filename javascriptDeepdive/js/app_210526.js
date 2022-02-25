(function() { // 즉시 실행 함수로 스크립트 전체를 감싸서 스코프를 구분하고
  'use strict'; // 즉시 실행 함수의 선두에 strict mode를 적용한다. 

  /**
   * 타입 변환
   * 암묵적, 명시적 변환 둘 중에 무엇을 사용하느냐,
   * 타입 변환으로 결과를 예측할 수 있어야 함이 제일 중요하다. 
   */

  // ES6 템플릿 리터럴도 암묵적 타입 변환 중 하나이다. (문자열로 변환)
  // console.log(`1 + 1 = ${1 + 1}`);

  // 숫자형으로 타입 변환
  console.log(typeof (2 - '1'));
  console.log(typeof (2 * '1'));
  console.log(typeof (2 % '1'));
  console.log(typeof (2 / '1'));

  // 문자형으로 타입 변환  + '' 값을 많이 쓴다.
  console.log(typeof (0 + ''));
  console.log(typeof (true + ''));

  // + 단항 연산자는 피연산자가 숫자 타입이 아니면 암묵적으로 숫자 타입으로 바꿔준다.
  console.log(+'');
  console.log(+'0');
  console.log(+'1');
  console.log(+true);
  console.log(+false);
  console.log(+null);
  console.log('체크', +[]); // 빈 배열은 타입 변환 됨
  console.log(+[10, 20]); // 빈 배열이 아닌 경우에는 타입 변환이 안됨 NaN
  console.log(+undefined); // NaN
  console.log(+{}); // NaN
  console.log(+(function(){})); NaN

  // 명시적 문자열 타입 변환
  console.log(String(1)); 
  console.log(String(null));
  console.log(String(undefined));

  // 명시적 숫자열 타입 변환
  console.log(Number('0'));
  console.log(Number(true));
  console.log(Number(false));

  // 문자열 -> 숫자 타입 변환
  console.log(parseInt('0'));
  console.log(parseFloat('10.53'));

  // * 연산자로 숫자 타입 변환
  console.log('0' * 1);
  console.log('10.53' * 1);
  console.log(true * 1);

  // 숫자열을 불리언 타입 변환
  console.log(Boolean(0)); // false
  console.log(Boolean(1)); // true
  
  // ! 부정 논리 연산자를 두번 사용하여 불리언 타입 변환
  console.log(!!'x'); // 문자열을 불리언 타입으로 = true
  console.log(!!''); // 문자열을 불리언 타입으로 = false
  console.log(!!0); // 숫자열을 불리언 타입으로 = false
  console.log(!!1); // 숫자열을 불리언 타입으로 = true
  console.log(!!NaN); // 숫자열을 불리언 타입으로 = false
  console.log(!!Infinity); // 숫자열을 불리언 타입으로 = true
  console.log(!!null); // false
  console.log(!!undefined); // false
  console.log(!!{}); // 객체 타입을 불리언 타입으로 = true
  console.log(!![]); // 객체 타입을 불리언 타입으로 = true
}());
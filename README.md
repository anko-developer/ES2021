# Vanilla JavaScript Guide() {

_Is explain_

> ES2021 (ES12)가 업데이트 되었다.  
> 기초 문법부터 하나하나 다시 정확하게 이해하고 넘어가고자 만든 저장소다.  
> 점심 먹고 1시간, 퇴근하고 1시간, 하루 2시간 나를 위한 시간을 갖도록 하자 :D
> ([anko-developer](https://github.com/anko-developer))

<!-- This guide is available in other languages too. See [Translation](#translation)

Other Style Guides

  - [ES5 (Deprecated)](https://github.com/airbnb/javascript/tree/es5-deprecated/es5)
  - [React](react/)
  - [CSS-in-JavaScript](css-in-javascript/)
  - [CSS & Sass](https://github.com/airbnb/css)
  - [Ruby](https://github.com/airbnb/ruby) -->

## Table of Contents

1. [Clean Coding](#clean-coding)
1. [Types](#types)
1. [Operator](#operator)
1. [단축 평가](#단축-평가)
1. [Object](#object)
1. [Function](#function)
<!-- 1. [Clean Coding](#references) -->

## Clean Coding

- **Important**: 아래 3가지는 반드시 지켜야 할 것들 이라고 생각한다.

  ```
  DRY 하게, (Don't Repeat Yourself),
  계속 반복되어지는 것을 피하자.
  KISS 하게, (Keep It Simple, Stupid),
  코드는 심플하고 멍청하게.
  YAGNI 하게, (You Ain't Gonna Need It),
  깨끗하게, 변경이 쉽게, 유지보수 용이하게 (O)
  필요하지 않는 기능, 사용하지 않는 기능, 지나치게 미래지향적 (X)
  ```

## Types

- 데이터 타입이 필요한 이유는?

  - 값을 저장할 때 확보해야 하는 **메모리 공간의 크기**를 결정하기 위해
  - 값을 참조할 때 한 번에 읽어 들여야 할 **메모리 공간의 크기**를 결정하기 위해
  - 메모리에서 읽어 들인 **2진수를 어떻게 해석**할지 결정하기 위해<br><br>

- **null**: 변수에 null을 할당하는 것은 변후가 이전에 참조하던 값을 더 이상 참조하지 않겠다는 의미다. 이는 이전에 할당되어 있던 값에 대한 참조를 명시적으로 제거하는 것을 의미하며, 자바스크립트 엔진은 누구도 참조하지 않는 메모리 공간에 대해 가비지 콜렉션을 수행할 것이다.

  ```javascript
  let foo = 'Anko';

  // 이전 참조를 제거. foo 변수는 더 이상 'Anko'를 참조하지 않는다.
  // 유용해 보이지는 않는다. 변수의 스코프를 좁게 만들어 변수 자체를 재빨리 소멸시키는 편이 낫다.
  foo = null;
  ```

## Operator

- **비교 연산자**

  ```javascript
  false == '0'; // true
  false == 'false'; // false

  /**
   * (==) 연산자는 예측하기 어려운 결과를 만들어낸다.
   * 따라서 동등 비교 연산자는 사용하지 않는 편이 좋다.
   * 대신 일치 비교 (===) 연산자를 사용한다.
   */

  5 === 5; // true;
  5 === '5'; // false;

  /**
   * 암묵적 타입 변환을 하지 않고 값을 비교한다.
   * 즉, 값과 타입이 모두 같은 경우만 true를 반환한다.
   */

  NaN === NaN; // false, NaN은 자신과 일치하지 않는 유일한 값이다.

  // isNaN 함수는 지정한 값이 NaN인지 확인하고 그 결과를 불리언 값으로 반환
  isNaN(NaN); // true
  isNaN(10); // true
  isNaN(1 + undefined); // true

  // 양의 0과 음의 0의 비교. 일치 비교/동등 비교 모두 결과는 true다.
  0 === -0; // true
  0 == -0; // true

  // ES6에서 도입된 Object.is 메서드는 다음과 같이 예측 가능한 정확한 비교 결과를 반환한다. 그 외에는 일치 비교 연산자(===)와 동일하게 동작한다.
  -0 === +0; // true
  Object.is(-0, +0); // false

  NaN === NaN; // false
  Object.is(NaN, NaN); // true
  ```

- **논리 연산자**: 논리 연산자로 구성된 복잡한 표현식은 가독성이 좋지 않아 한눈애 이해하기 어려울 때가 있다. 이러한 경우 [드 모르간의 법칙](https://ko.wikipedia.org/wiki/%EB%93%9C_%EB%AA%A8%EB%A5%B4%EA%B0%84%EC%9D%98_%EB%B2%95%EC%B9%99)을 활용하면 복잡한 표현식을 좀 더 가독성 좋은 표현식으로 변환할 수 있다.

  ```javascript
  !(x || y) === (!x && !y);
  !(x && y) === (!x || !y);
  ```

- **지수 연산자**: ES7에서 도입된 지수 연산자는 좌항의 피연산자를 베이스로, 우항의 피연산자를 지수로 거듭 제곱하여 숫자 값을 반환한다.

  ```javascript
  2 ** 2; // 4
  2 ** 2.5; // 5.65685424949238
  2 ** 0; // 1
  2 ** -2; // 0.25

  // 지수 연산자가 도입되지 이전에는 Math.pow 메서드를 사용했다.
  Math.pow(2, 2); // 4
  Math.pow(2, 2.5); // 5.65685424949238
  Math.pow(2, 0); // 1
  Math.pow(2, -2); // 0.25

  // 지수 연산자는 Math.pow 메서드보다 가독성이 좋다.
  2 ** 2 ** 2; // 16
  Math.pow(Math.pow(2, 2), 2); // 16

  // 음수를 거듭제곱의 베이스로 사용해 계산하려면 다음과 같이 괄호로 묶어야 한다.
  -5 ** 2; // error
  (-5) ** 2; // 25

  // 지수 연산자는 할당 연산자와 함께 사용도 가능하다.
  let num = 5;
  num ** 2; // 25

  // 지수 연산자는 이항 연산자 중에서 우선순위가 가장 높다.
  2 * 5 ** 2; // 50
  ```

## 단축 평가

- **단축 평가**를 사용한 함수 매개변수에 기본값을 설정할 때

  ```javascript
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
  ```

- **옵셔널 체이닝 연산자**: ES11(ECMAScript2020)에서 도입된 옵셔널 체이닝 연산자 ?.는 좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.

  ```javascript
  let str = '';

  // 문자열 길이(length)를 참조한다.
  let length = str && str.length;

  // 문자열 길이(length)를 참조하지 못한다.
  console.log(length); // ''

  // 하지만 옵셔널 체이닝 연산자 ?.는 좌항 피연산자가 false로 평가되는 Falsy 값(false, undefined, null, 0, -0, NaN, '')이라도 null 또는 undefined가 아니면 우항의 프로퍼티 참조를 이어간다.

  let str = '';

  // 문자열 길이(length)를 참조한다. 이때 좌항 피연산자가 false로 평가되는 Falsy 값이라도
  // null 또는 undefined가 아니면 우항의 프로퍼티 참조를 이어간다.
  let length = str?.length;
  console.log(length); // 0
  ```

- **null 병합 연산자**: ES11(ECMAScript2020)에서 도입된 null 병합 연산자 ??는 좌항의 피연산자가 null 또는 undefined인 경우 우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환한다. null 병합 연산자 ??는 변수에 기본값을 설정할 때 유용하다.

  ```javascript
  // Falsy 값인 0이나 ''도 기본값으로서 유효하다면 예기치 않은 동작이 발생할 수 있다.
  let foo = '' || 'default string';
  console.log(foo); // 'default string'

  // 하지만 null 병합 연산자 ??는 좌항의 피연산자가 false로 평가되는 Falsy(false, undefined, null, 0, -0, NaN, '')이라도
  // null 또는 undefined가 아니면 좌항의 피연산자를 그대로 반환한다.

  // 좌항의 피연산자가 Falsy 값이라도 null 또는 undefined가 아니면 좌항의 피연산자를 반환환다.
  let foo = '' ?? 'default string';
  console.log(foo); // ''
  ```

## Object

- **프로퍼티 축약 표현**: ES6에서는 프로퍼티 값으로 변수를 사용하는 경우 변수 이름과 프로퍼티 키가 동일한 이름일 때 프로퍼티 키를 생략

  ```javascript
  // ES5
  var x = 1,
    y = 2;

  var obj = {
    x: x,
    y: y
  };

  console.log(obj); // {x: 1, y: 2}

  // ES6
  let x = 1,
    y = 2;

  // 프로퍼티 축약 표현
  const obj = { x, y };

  console.log(obj); // {x: 1, y: 2}
  ```

- **계산된 프로퍼티 이름(computed property name)**: 문자열 또는 문자열로 타입 변환할 수 있는 값으로 평가되는 표혀식을 사용해 프로퍼티 키를 동적으로 생성 할 수도 있다.

  ```javascript
  // ES5
  var prefix = 'prop';
  var i = 0;

  var obj = {};

  // 계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성
  obj[prefix + '-' + ++i] = i;
  obj[prefix + '-' + ++i] = i;
  obj[prefix + '-' + ++i] = i;

  console.log(obj); // {[prop-1: 1, prop-2: 2, prop-3: 3]}

  // ES6
  const prefix = 'prop';
  let i = 0;

  // 객체 리터럴 내부에서 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성
  const obj = {
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i
  };

  console.log(obj); // {[prop-1: 1, prop-2: 2, prop-3: 3]}
  ```

- **메서드 축약표현**: ES5에서 메서드를 정의하려면 프로퍼티 값으로 함수를 할당한다.

  ```javascript
  // ES5
  var obj = {
    name: 'Lee',
    sayHi: function () {
      console.log('Hi!' + this.name);
    }
  };

  obj.sayHi(); // Hi! Lee

  // ES6
  const obj = {
    name: 'Lee',
    // 메서드 축약 표현
    sayHi() {
      console.log('Hi!' + this.name);
    }
  };

  obj.sayHi(); // Hi! Lee
  ```

- [중요] **얕은 복사(shallow copy)와 깊은 복사(deep copy)**: 객체를 프로퍼티 값으로 갖는 객체의 경우 얕은 복사 한 단계까지만 복사하는 것을 말하고 깊은 복사는 객체의 중첩되어 있는 객체까지 모두 복사하는 것을 말한다.  
  얕은 복사와 깊은 복사로 생성된 객체는 원본과는 다른 객체다. 즉, 원본과 복사본은 참조 값이 다른 별개의 객체다. 하지만 얕은 복사는 객체의 중첩되어 있는 객체의 경우 참조 값을 복사하고 깊은 복사는 객체에 중첩되어 있는 객체까지 모두 복사해서 원시 값처럼 완전한 복사본을 만든다는 차이가 있다.  
  전달되는 값의 종류가 원시 값인지 참조 값인지 구별해서 강조하는 의미에서 '값에 의한 전달'과 '참조에 의한 전달'로 구분하여 부르기도 한다.

  ```javascript
  const o = { x: { y: 1 } };

  // 얕은 복사
  const c1 = { ...o }; // 스프레드 문법
  console.log(c1 === o); // false
  console.log(c1.x === o.x); // true

  // lodash의 cloneDeep을 사용한 깊은 복사
  const _ = require('lodash');
  // 깊은 복사
  const c2 = _.cloneDeep(o);
  console.log(c2 === o); // false
  console.log(c2.x === o.x); // false
  ```

  다음과 같이 원시 값을 할당한 변수를 다른 변수에 할당하는 것은 깊은 복사, 객체를 할당한 변수를 다른 변수에 할당하는 것(참조값)은 얕은 복사라고 부르는 경우도 있다.

  ```javascript
  let v = 1;

  // '깊은 복사'라고 부르기도 한다.
  const c1 = v;
  console.log(c1 === v); // true - 값은 같지만 메모리가 다른 원시 값이다.

  v = 2;
  console.log(c1 === v); // false - 그러므로 여기서 false 가 나오는 것이다!

  const o = { x: 1 };

  // '얕은 복사'라고 부르기도 한다.
  // 얕은 복사는 저장된 메모리 주소는 다르지만 동일한 참조 값을 갖는다. c2와 o는 모두 동일한 객체를 가리킨다. 이것은 두 개의 식별자가 하나의 객체를 공유한다는 것을 의미한다.
  const c2 = o;
  console.log(c2 === o); // true

  // 얕은 복사
  const person = {
    name: 'Kim'
  };

  // 얕은 복사(참조 값을 복사), copy와 person은 동일한 참조 값을 갖는다.
  const copy = person;
  console.log(copy === person); // true

  // copy를 통해 객체를 변경한다.
  copy.name = 'Lee';

  // person을 통해 객체를 변경한다.
  person.address = 'Seoul';

  // copy와 person은 동일한 객체를 가리킨다.
  // 따라서 어느 한쪽에서 객체를 변경하면 서로 영향을 주고받는다.
  console.log(person); // {name: 'Lee', address: 'Seoul'};
  console.log(copy); // {name: 'Lee', address: 'Seoul'};
  ```

## Function

- **이상적인 함수는 한 가지 일만 해야 하며 가급적 작게 만들어야 한다.**  
  따라서 parameter는 최대 3개 이상을 넘지 않는 것을 권장한다. 만약 그 이상의 parameter가 필요하다면 하나의 parameter를 선언하고 객체를 argument로 전달하는 것이 유리하다.

- **함수 호이스팅**: 함수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징을 함수 호이스팅이라 한다.  
  함수 표현식으로 함수를 정의하면 함수 호이스팅이 발생하는 것이 아니라 변수 호이스팅이 발생한다. 함수 표현식으로 정의한 함수는 반드시 함수 표현식 이후에 참조 또는 호출해야 한다.  
  함수 호이스팅은 함수를 호출하기 전에 반드시 함수를 선언해야 한다는 당연한 규칙을 무시한다.  
  이 같은 문제 때문에 함수 선언문 대신 함수 표현식을 사용할 것을 권장한다.

  ```javascript
  // 함수 참조
  console.dir(add); // f add(x,y)
  console.dir(sub); // undefined

  // 함수 호출
  console.log(add(2, 5)); // 7
  console.log()sub(2, 5); // TypeError: sub is not a function

  // 함수 선언문
  function add(x, y) {
    return x + y;
  }

  // 함수 표현식
  const sub = function (x, y) {
    return x - y;
  };
  ```

**[⬆ back to top](#table-of-contents)**

# };

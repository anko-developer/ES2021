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
1. [Scope](#scope)
1. [Variable](#variable)
1. [Constructor Function](#constructor-function)
1. [Prototype](#prototype)
1. [Strict mode](#strict-mode)
1. [This](#this)

## Clean Coding

- **Important**: 아래 3가지는 반드시 지켜야 할 것들 이라고 생각한다.

  ```
  DRY 하게, (Don`t Repeat Yourself),
  계속 반복되어지는 것을 피하자.
  KISS 하게, (Keep It Simple, Stupid),
  코드는 심플하고 멍청하게.
  YAGNI 하게, (You Ain`t Gonna Need It),
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

- **계산된 프로퍼티 이름(computed property name)**: 문자열 또는 문자열로 타입 변환할 수 있는 값으로 평가되는 표현식을 사용해 프로퍼티 키를 동적으로 생성 할 수도 있다.

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
  console.log(sub(2, 5)); // TypeError: sub is not a function

  // 함수 선언문
  function add(x, y) {
    return x + y;
  }

  // 함수 표현식
  const sub = function (x, y) {
    return x - y;
  };
  ```

- **재귀함수**: 자기 자신을 호출하는 행위, 즉 재귀 호출을 수행하는 함수를 말한다. 재귀 함수는 반복되는 처리를 위해 사용한다. 그리고 재귀 호출을 멈출 수 있는 탈출 조건을 반드시 만들어야 한다.

  ```javascript
  // countdown 함수는 문제 없이 잘 작동한다.
  // 하지만 반복문 없이도 구현할 수 있는 방법이 있다.
  function countdown(n) {
    for (var i = n; i >= 0; i--) {
      console.log(i);
    }
  }

  // 자기 자신을 호출하는 재귀 함수를 사용하면 반복되는 처리를 반복문 없이 구현할 수 있다.
  function countdown(n) {
    if (n < 0) {
      return;
    }

    console.log(n);
    countdown(n - 1);
  }

  countdown(10);
  ```

- **순수 함수와 비순수 함수**:함수 내부에서 외부 상태를 직접 참조하면 외부 상태에 의존하게 되어 반환값이 변할 수 있고, 외부 상태도 변경할 수 있으므로 비순수 함수가 된다.  
  함수가 외부 상태를 변경하면 상태 변화를 추적하기 어려워진다. 따라서 함수 외부 상태의 변경을 지양하는 순수 함수를 사용하는 것이 좋다.  
  **함수형 프로그래밍은 순수 함수와 보조 함수의 조합으 통해 외부 상태를 변경하는 부수 효과를 최소화해서 불변성을 지향하는 프로그래밍 패러다임이다.**

## Scope

- **스코프 체인**: 모든 스코프는 하나의 계층적 구조로 연결되며, 모든 지역 스코프의 최상위 스코프는 전역 스코프다. 이렇게 스코프가 계층적으로 연결된 것을 스코프 체인이라 한다.  
  변수를 참조할 때 자바스크립트 엔진은 스코프 체인을 통해 변수를 참조하는 코드의 스코프에서 시작하여 상위 스코프 방향으로 이동하며 선언된 변수를 검색한다.
- **렉시컬 환경**: 스코프 체인은 실행 컨텍스트의 렉시컬 환경을 단방향으로 연결한 것이다. 전역 렉시컬 환경은 코드가 로드되면 곧바로 생성되고 함수 렉시컬 환경은 함수가 호출되면 곧바로 생성된다.  
  **자바스크립트는 렉시컬 스코프를 따르므로 함수를 어디서 호출했는지가 아니라 함수를 어디서 정의했는지에 따라 상위 스코프를 결정한다. 함수가 호출된 위치는 상위 스코프 결정에 어떠한 영향도 주지 않는다. 즉, 함수의 상위 스코프는 언제나 자신이 정의된 스코프다.**

## Variable

- **전역 변수의 문제점**  
  **긴 생명 주기**: 생명 주기가 길다. 따라서 메모리 리소스도 오랜 기간 소비한다. 또한 전역 변수의 상태를 변경 할 수 있는 시간도 길고 기회도 많다. 이름이 중복되면 의도치 않은 재할당이 이뤄진다.  
  **스코프 체인 상에서 종점에 존재**: 스코프 체인 상에서 종점에 존재한다. 이는 변수를 검색 할 때 전역 변수가 가장 마지막에 검색된 다는 것을 말한다. 즉, 전역 변수의 검색 속도는 가장 느리다.  
  **네임스페이스의 오염**: 자바스크립트의 가장 큰 문제점 중 하나는 파일이 분리되어 있다 해도 하나의 전역 스코프를 공유한다는 것이다. 따라서 다른 파일 내에서 동일한 이름으로 명명된 전역 변수나 전역 함수가 같은 스코프 내에 존재할 경우 예상치 못한 결과를 가져올 수 있다.

- **전역 변수의 사용을 억제하는 방법**: 전역 변수를 반드시 사용해야 할 이유를 찾지 못한다면 지역 변수를 사용해야 한다. 변수의 스코프는 좁을수록 좋다. 전역 변수를 절대 사용하지 말라는 의미가 아니다. 무분별한 전역 변수의 남발은 억제해야 한다는 것이다.

  **[즉시 실행 함수]** - 모든 코드를 즉시 실행 함수로 감싸면 모든 변수는 즉시 실행 함수의 지역 변수가 된다.

  ```javascript
  (function () {
    var foo = 10; // 즉시 실행 함수의 지역 변수
  })();

  console.log(foo); // ReferenceError: foo is not defined
  ```

  **[네임스페이스 객체]** - 네임스페이스 역할을 담당할 객체를 생성하고 전역 변수처럼 사용하고 싶은 변수를 프로퍼티로 추가하는 방법이다.  
  네임스페이스를 분리해서 식별자 충돌을 방지하는 효과는 있으나 네임스페이스 객체 자체가 전역 변수에 할당되므로 그다지 유용해 보이지는 않는다.

  ```javascript
  var MYAPP = {}; // 전역 네임스페이스 객체

  MYAPP.name = 'Kim';
  MYAPP.person = {
    address: 'Seoul'
  };

  console.log(MYAPP.name); // Kim
  console.log(MYAPP.person.address); // Seoul
  ```

  **[모듈 패턴]]** - 모듈 패턴은 클래스를 모방해서 관련이 있는 변수와 함수를 모아 즉시 실행 함수로 감싸 하나의 모듈을 만든다. 모듈 패턴은 자바스크립트의 강력한 기능인 클로저를 기반으로 동작한다. 모듈 패턴의 특징은 전역 변수의 억제는 물론 캡슐화까지 구현할 수 있다는 것이다.  
  캡슐화는 객체의 상태를 나타내는 프로퍼티와 프로퍼티를 참조하고 조작할 수 있는 동작인 메서드를 하나로 묶는 것을 말한다.

  ```javascript
  var Counter = (function () {
    // private 변수
    var num = 0;

    // 외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환한다.
    return {
      increase() {
        return ++num;
      },
      decrease() {
        return --num;
      }
    };
  })();

  // private 변수는 외부로 노출되지 않는다.
  console.log(num); // undefined
  console.log(Counter.increase()); // 1
  console.log(Counter.increase()); // 2
  console.log(Counter.increase()); // 3
  console.log(Counter.decrease()); // 2
  console.log(Counter.decrease()); // 1
  ```

  **[ES6 모듈]** - 파일 자체의 독자적인 모듈 스코프를 제공한다. 따라서 모듈 내에서 var 키워드로 선언한 변수는 더는 전역 변수가 아니며 window 객체의 프로퍼티도 아니다.
  script 태그에 type="module" 어트리뷰트를 추가하면 로드된 자바스크립트 파일은 모듈로서 동작한다. 파일 확장자는 mjs를 권장한다.

  ```javascript
  <script type="module" src="lib.mjs"></script>
  <script type="module" src="app.mjs"></script>
  ```

  지원하지 않는 브라우저가 아직은 많기 때문에 ES6 모듈 기능보다는 Webpack 등의 모듈 번들러를 사용하는 것이 일반적이다.

- **Const**  
  **[ES6 모듈]** - 상수는 상태 유지와 가독성, 유지보수의 편의를 위해 적극적으로 사용해야 한다.  
  상수의 이름은 대문자로 선언해 상수임을 명확히 나타낸다.

  ```javascript
  // 세율을 의미하는 0.1은 변경할 수 없는 상수로서 사용될 값이다.
  // 변수 이름을 대문자로 선언해 상수임을 명확히 나타낸다.
  const TAX_RATE = 0.1;

  // 세전 가격
  let preTaxPrice = 100;

  // 세후 가격
  let afterTaxPrice = preTaxprice + preTaxprice * TAX_RATE;

  console.log(afterTaxPrice); // 110
  ```

  **const 키워드와 객체** - const 키워드로 선언된 변수에 객체를 할당한 경우 값을 변경할 수 있다. 변경 가능한 값인 객체는 재할당 없이도 직접 변경이 가능하기 때문이다.

  ```javascript
  const person = {
    name: 'Kim'
  };

  // 객체는 변경 가능한 값이다. 따라서 재할당 없이 변경이 가능하다.
  person.name = 'Lee';
  console.log(person); // {name: 'Lee'};
  ```

  **const 키워드는 재할당을 금지할 뿐 "불변"을 의지하지는 않는다.**

- **let vs const**: 변수 선언에는 기본적으로 const를 사용하고 let은 재할당이 필요한 경우에 한정해 사용하는 것이 좋다.  
  const 키워드를 사용하면 의도치 않은 재할당을 방지하기 때문에 좀 더 안전하다.  
  변수를 선언하는 시점에는 재할당이 필요할지 잘 모르는 경우가 많다. 그리고 객체는 의외로 재할당하는 경우가 드물다. 따라서 변수를 선언할 때는 일단 const 키워드를 사용하자. 반드시 재할당이 필요하다면 그때 const 키워드를 let 키워드로 변경해도 결코 늦지 않다.  
  var와 let, const 키워드는 다음과 같이 사용하는 것을 권장한다.
  - ES6를 사용한다면 var 키워드는 사용하지 않는다.
  - 재할당이 필요한 경우에 한정해 let 키워드를 사용한다. 이때 변수의 스코프는 최대한 좁게 만든다.
  - 변경이 발생하지 않고 읽기 전용으로 사용하는(재할당이 필요 없는 상수) 원시 값과 객체에는 const 키워드를 사용한다. const 키워드는 재할당을 금지하므로 var, let 키워드보다 안전하다.

## Constructor Function

- **생성자 함수는 일반적으로 첫 문자를 대문자로 기술하는 파스칼 케이스로 명명하여 일반 함수와 구별할 수 있도록 한다.**
- **생성자 함수의 인스턴스 생성과정**  
   [1. 인스턴스 생성과 this 바인딩] - 암묵적으로 빈 객체가 생성된다. 암묵적으로 생성된 빈 객체, 즉 인스턴스는 this에 바인딩된다.

  ```javascript
  function Circle(radius) {
    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
    console.log(this); // Circle {}

    this.radius = radius;
    this.getDiameter = function () {
      return 2 * this.radius;
    };
  }
  ```

  [2. 인스턴스 초기화] - this에 바인딩되어 있는 인스턴스에 프로퍼티나 메서드를 추가하고 생성자 함수가 인수로 전달받은 초기값을 인스턴스 프로퍼티에 할당하여 초기화하거나 고정값을 할당한다.

  ```javascript
  function Circle(radius) {
    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
    console.log(this); // Circle {}

    // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function () {
      return 2 * this.radius;
    };
  }
  ```

  [3. 인스턴스 반환] - 생성자 함수 내부의 모든 처리가 끝나면 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.

  ```javascript
  function Circle(radius) {
    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
    console.log(this); // Circle {}

    // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function () {
      return 2 * this.radius;
    };

    // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
  }

  // 인스턴스 생성. Circle 생성자 함수는 암묵적으로 this를 반환한다.
  const circle = new Circle(1);
  console.log(circle); // Circle {radius: 1, getDiameter: f}
  ```

  만약 this가 아닌 다른 객체를 명시적으로 반환하면 this가 반환되지 못하고 return 문에 명시한 객체가 반환된다.

  ```javascript
  function Circle(radius) {
    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
    console.log(this); // Circle {}

    // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function () {
      return 2 * this.radius;
    };

    // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
    // 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
    return {};
  }

  // 인스턴스 생성. Circle 생성자 함수는 암묵적으로 this를 반환한다.
  const circle = new Circle(1);
  console.log(circle); // {}
  ```

  하지만 명시적으로 원시 값을 반환하면 원시 값 반환은 무시되고 this가 반환된다.

  ```javascript
  function Circle(radius) {
    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
    console.log(this); // Circle {}

    // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function () {
      return 2 * this.radius;
    };

    // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
    // 명시적으로 원시 값을 반환하면 원시 값 반환은 무시되고 암묵적으로 this가 반환된다.
    return 100;
  }

  // 인스턴스 생성. Circle 생성자 함수는 암묵적으로 this를 반환한다.
  const circle = new Circle(1);
  console.log(circle); // Circle {radius: 1, getDiameter: f}
  ```

  **이처럼 생성자 함수 내부에서 명시적으로 this가 아닌 다른 값을 반환하는 것은 생성자 함수의 기본 동작을 훼손한다. 따라서 생성자 함수 내부에서 return 문을 반드시 생략해야 한다.**

- **constructor와 non-constructor의 구분**: 자바스크립트 엔진은 함수 정의를 평가하여 함수 객체를 생성할 때 함수 정의 방식에 따라 함수를 constructor와 non-constructor로 구분한다.

  - constructor: 함수 선언문, 함수 표현식, 클래스(클래스도 함수다)
  - non-constructor: 메서드(ES6 메서드 축약 표현), 화살표 함수
    <br><br>

  ```javascript
  // 일반 함수 정의: 함수 선언문, 함수 표현식
  function foo () {

  }
  const bar = function () {

  };

  // 프로퍼티 x의 값으로 할당된 것은 일반 함수로 정의된 함수다. 이는 메서드로 인정하지 않는다.
  const baz = {
    x: function () {

    }
  };

  // 일반 함수로 정의된 함수만이 constructor다.
  new foo(); // foo {}
  new bar(); // bar {}
  new baz.x(); x {}

  // 화살표 함수 정의
  const arrow = () => {};
  new arrow(); // TypeError: arrow is not a constructor

  // 메서드 정의: ES6의 메서드 축약 표현만 메서드로 인정한다.
  const obj = {
    x() {}
  };
  new obj.x(); // TypeError: arrow is not a constructor
  ```

- **new.target**: ES6에서는 new.target를 지원한다. this와 유사하게 constructor인 모든 함수 내부에서 암묵적인 지역 변수와 같이 사용되며 메타 프로퍼티라고 부른다. IE는 지원하지 않는다.  
  **new 연산자와 함께 생성자 함수로서 호출되면 함수 내부의 new.target은 함수 자신을 가리킨다. new 연산자 없이 일반 함수로서 호출된 함수 내부의 new.target은 undefined다.**  
  따라서 함수 내부의 new.target을 사용하여 new 연산자와 생성자 함수로서 호출했는지 확인하여 그렇지 않은 경우 new 연산자와 함께 재귀 호출을 통해 생성자 함수로서 호출할 수 있다.

  ```javascript
  // 생성자 함수
  function Circle(radius) {
    // 이 함수가 new 연산자와 함께 호출되지 않았다면 new.target는 undefined다.
    if (!new.target) {
      return new Circle(radius);
    }

    this.radius = radius;
    this.getDiameter = function () {
      return 2 * this.radius;
    };
  }

  // new 연산자 없이 생성자 함수를 호출하여도 new.target을 통해 생성자 함수로서 호출된다.
  const circle = Circle(5);
  console.log(circle.getDiameter());
  ```

  **[스코프 세이프 생성자 패턴]** - ★★★★★

  ```javascript
  // Scope-Safe Constructor Pattern
  function Circle(radius) {
    // 생성자 함수가 new 연산자와 함께 호출되면 함수의 선두에서 빈 객체를 생성하고
    // this에 바인딩한다. 이때 this와 Circle은 포로토타입에 의해 연결된다.

    // 이 함수가 new 연산자와 함께 호출되지 않았다면 이 시점의 this는 전역 객체 window를 가리킨다.
    // 즉, this와 Circle은 프로토타입에 의해 연결되지 않는다.
    if (!(this instanceof Circle)) {
      // new 연산자와 함께 호출하여 생성된 인스턴스를 반환한다.
      return new Circle(radius);
    }

    this.radius = radius;
    this.getDiameter = function () {
      return 2 * this.radius;
    };
  }

  // new 연산자 없이 생성자 함수를 호출하여도 생성자 함수로서 호출된다.
  const circle = Circle(5);
  console.log(circle.getDiameter()); // 10
  ```

## Prototype

- **상속과 프로토타입**

  **[잘못된 예]** - getArea 메서드는 모든 인스턴스가 동일한 내용의 메서드를 사용하므로 단 하나만 생성하여 모든 인스턴스가 공유해서 사용하는 것이 바람직하다. 그런데 Circle 생성자 함수는 인스턴스를 생성할 때마다 getArea 메서드를 중복 생성하고 모든 인스턴스가 중복 소유한다.

  ```javascript
  function Circle(radius) {
    this.radius = radius;
    this.getArea = function () {
      // Math.PI는 원주율을 나타내는 상수다.
      return Math.PI * this.radius ** 2;
    };
  }

  // 반지름이 1인 인스턴스 생성
  const circle1 = new Circle(1);

  // 반지름이 2인 인스턴스 생성
  const circle2 = new Circle(2);

  // Circle 생성자 함수는 인스턴스를 생성할 때마다 동일한 동작을 하는
  // getArea 메서드를 중복 생성하고 모든 인스턴스가 중복 소유한다.
  // getArea 메서드는 하나만 생성하여 모든 인스턴스가 공유해서 사용하는 것이 바람직하다.

  console.log(circle1.getArea === circle2.getArea); // false

  console.log(circle1.getArea()); // 3.141592653589793
  console.log(circle2.getArea()); // 12.566370614359172
  ```

  **[올바른 예]** - 프로토타입을 기반으로 상속을 구현한다.  
  상위(부모) 객체 역할을 하는 Circle.prototype의 모든 프로퍼티와 메서드를 상속받는다. Circle 생성자 함수가 생성하는 모든 인스턴스는 getArea 메서드를 상속받아 사용할 수 있다. 즉, 자신의 상태를 나타내는 radius 프로퍼티만 개별적으로 소유하고 내용이 동일한 메서드는 상속을 통해 공유하여 사용하는 것이다.

  ```javascript
  function Circle(radius) {
    this.radius = radius;
  }

  // Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를
  // 공유해서 사용할 수 있도록 프로토타입에 추가한다.
  // 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩되어 있다.
  Circle.prototype.getArea = function () {
    return Math.PI * this.radius ** 2;
  };

  // 인스턴스 생성
  const circle1 = new Circle(1);
  const circle2 = new Circle(2);

  // Circle 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는
  // 프로토타입 Circle.prototype으로부터 getArea 메서드를 상속받는다.
  // 즉, Circle 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메서드를 공유한다.
  console.log(circle1.getArea === circle2.getArea); // true

  console.log(circle1.getArea()); // 3.141592653589793
  console.log(circle2.getArea()); // 12.566370614359172
  ```

- **함수 객체의 prototype 프로퍼티**: 모든 객체가 가지고 있는(엄밀히 말하면 Object.prototype으로부터 상속받은) **proto** 접근자 프로퍼티와 함수 객체만이 가지고 있는 prototype 프로퍼티는 결국 동일한 프로퍼티타입을 가리킨다. 하지만 프로퍼티를 사용하는 주체가 다르다.

- **프로토타입 체인**: 프로토타입의 프로토타입은 언제나 Object.prototype이다. 객체의 프로퍼티(메서드 포함)에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티가 없다면 [[Prototype]] 내부 슬롯의 참조를 따라 자신의 부모 역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색한다. 이를 프로토타입 체인이라 한다.  
  **프로토타입 체인은 자바스크립트가 객체지향 프로그래밍의 상속을 구현하는 메커니즘이다.**

- **오버라이딩과 프로퍼티 섀도잉**: 프로토타입이 소유한 프로퍼티(메서드 포함)를 프로토타입 프로퍼티, 인스턴스가 소유한 프로퍼티를 인스턴스 프로퍼티라고 부른다.  
  프로토타입 프로퍼티와 같은 이름의 프로퍼티를 인스턴스에 추가하면 프로토타입 체인을 따라 프로토타입 프로퍼티를 검색하여 프로토타입 프로퍼티를 덮어쓰는 것이 아니라 인스턴스 프로퍼티로 추가한다. 이때 인스턴스 메서드 sayHello는 프로토타입 메서드 sayHello를 오버라이딩했고 프로토타입 메서드 sayHello는 가려진다. 이처럼 **상속 관계에 의해 프로퍼티가 가려지는 현상을 프로퍼티 섀도잉**이라 한다.

  ```javascript
  const Person = (function () {
    function Person(name) {
      this.name = name;
    }

    // 프로토타입 메서드
    Person.prototype.sayHello = function () {
      console.log(`Hi My name is ${this.name}`);
    };

    // 생성자 함수를 반환
    return Person;
  })();

  const me = new Person('Kim');

  // 인스턴스 메서드
  me.sayHello = function () {
    console.log(`Hey! My name is ${this.name}`);
  };

  // 인스턴스 메서드가 호출된다. 프로토타입 메서드는 인스턴스 메서드에 의해 가려진다.
  me.sayHello(); // Hey! My name is Kim
  ```

  메서드를 삭제하는 경우도 마찬가지다.

  ```javascript
  // 인스턴스 메서드를 삭제한다.
  delete me.sayHello;

  // 인스턴스에는 sayHello 메서드가 없으므로 프로토타입 메서드가 호출된다.
  me.sayHello; // Hi My name is Kim

  // 다시 한번 sayHello 메서드를 삭제하여 프로토타입 메서드를 삭제 해봐도
  // 프로토타입 체인을 통해 프로토타입 메서드가 삭제되지 않는다.
  delete me.sayHello;

  // 프로토타입 메서드가 호출된다.
  me.sayHello(); // Hi My name is Kim
  ```

  이와 같이 하위 객체를 통해 프로토타입의 프로퍼티를 변경 또는 삭제하는 것은 불가능하다. 하위 객체를 통해 프로토타입에 get 액세스는 허용되나 set 액세스는 허용되지 않는다.  
  프로토타입 프로퍼티를 변경 또는 삭제하려면 하위 객체를 통해 프로토타입 체인으로 접근하는 것이 아니라 프로토타입에 직접 접근해야 한다.

  ```javascript
  // 프로토타입 메서드 변경
  Person.prototype.sayHello = function () {
    console.log(`Hey! My name is ${this.name}`);
  };

  me.sayHello(); // Hey! My name is Kim

  // 프로토타입 메서드 삭제
  delete Person.prototype.sayHello;
  me.sayHello(); // TypeError: me.sayHello is not a function
  ```

- **프로토타입 교체**: 부모 객체인 프로토타입을 동적으로 변경할 수 있다는 의미인데, 이러한 특징을 활용하여 객체 간의 상속 관계를 동적으로 변경할 수 있다. 프로토타입은 생성자 함수 또는 인스턴스에 의해 교체할 수 있다.

  **[생성자 함수에 의한 프로토타입의 교체]**

  ```javascript
  const Person = (function () {
    function Person(name) {
      this.name = name;
    }

    // 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
    // 객체 리터럴로 prototype을 교체하면 객체 리터럴에는 constructor 프로퍼티가 존재하지 않는다.
    // 따라서 인스턴스를 할당 한 아래의 me 객체에서 생성자 함수를 검색하면 Person이 아닌 Object가 나온다.
    // 이처럼 프로토타입을 교체하면 constructor 프로퍼티와 생성자 함수 간의 연결이 파괴된다.
    Person.prototype = {
      constructor: Person, // 프로토타입을 교체한 객체 리터럴에 constructor 프로퍼티를 추가하여 프로토타입의 constructor 프로퍼티를 되살린다.
      sayHello() {
        console.log(`Hi! My name is ${this.name}`);
      }
    };

    // 객체 리터럴 방식이 아니라면 constructor 프로퍼티가 생성 된다.
    // Person.prototype.sayHello = function() {
    //   console.log('test');
    // }
    return Person;
  })();

  const me = new Person('Kim');
  console.log(me.constructor); // Person
  ```

  **[인스턴스에 의한 프로토타입의 교체]** - 프로토타입은 생성자 함수의 prototype 프로퍼티뿐만 아니라 인스턴스의 **proto** 접근자 프로퍼티(또는 Object.getPrototypeOf 메서드)를 통해 접근할 수 있다. 따라서 인스턴스의 **proto** 접근자 프로퍼티(또는 Object.getPrototypeOf 메서드)를 통해 프로토타입을 교체할 수 있다.

  ```javascript
  function Person(name) {
    this.name = name;
  }

  const me = new Person('Kim');

  // 프로토타입으로 교체할 객체
  const parent = {
    sayHello() {
      console.log(`Hi! My name is ${this.name}`);
    }
  };

  // ① me 객체의 프로토타입을 parent 객체로 교체한다.
  Object.setPrototypeOf(me, parent);

  // 위 코드는 아래의 코드와 동일하게 동작한다.
  // me.__proto__ = parent;

  my.sayHello(); // Hi! My name is Kim
  ```

  ①에서 me 객체의 프로토타입을 parent 객체로 교체했다.  
  '생성자 함수에 의한 프로토타입의 교체'와 마찬가지로 프로토타입으로 교체한 객체에는 constructor 프로퍼티가 없으므로 constructor 프로퍼티와 생성자 함수 간의 연결이 파괴된다. 따라서 프로토타입의 constructor 프로퍼티로 me 객체의 생성자 함수를 검색하면 Person이 아닌 Object가 나온다.

  ```javascript
  // 프로토타입을 교체하면 constuctor 프로퍼티와 생성자 함수 간의 연결이 파괴된다.
  console.log(me.constructor === Person); // false
  console.log(me.constructor === Object); // true
  ```

- **정적 프로퍼티/메서드**: 정적 프로퍼티/메서드는 생성자 함수로 인스턴스를 생성하지 않아도 참조/호출할 수 있는 프로퍼티/메서드를 말한다.  
  <br>
  아래는 생성자 함수가 생성한 인스턴스는 자신의 프로토타입 체인에 속한 객체의 프로퍼티/메서드에 접근할 수 있다. 하지만 정적 프로퍼티/메서드는 인스턴스의 프로토타입 체인에 속한 객체의 프로퍼티/메서드가 아니므로 인스턴스로 접근할 수 없다.

  ```javascript
  // 생성자 함수
  function Person(name) {
    this.name = name;
  }

  // 프로토타입 메서드
  Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}`);
  };

  // 정적 프로퍼티
  Person.staticProp = 'static prop';

  // 정적 메서드
  Person.staticMethod = function () {
    console.log('staticMethod');
  };

  const me = new Person('Kim');

  // 생성자 함수에 추가한 정적 프로퍼티/메서드는 생성자 함수로 참조/호출한다.
  Person.staticMethod(); // staticMethod

  // 정적 프로퍼티/메서드는 생성자 함수가 생성한 인스턴스로 참조/호출할 수 없다.
  // 인스턴스 참조/호출할 수 있는 프로퍼티/메서드는 프로토타입 체인 상 존재해야 한다.
  me.staticMethod(); // TypeError: me.staticMethod is not a function
  ```

  프로토타입 메서드를 호출하려면 인스턴스를 생성해야 하지만 정적 메서드는 인스턴스를 생성하지 않아도 호출할 수 있다.

  ```javascript
  function Foo() {}

  // 프로토타입 메서드
  // this를 참조하지 않는 프로토타입 메서드는 정적 메서드로 변경하여도 동일한 효과를 얻을 수 있다.
  Foo.prototype.x = function () {
    console.log('x');
  };

  const foo = new Foo();
  // 프로토타입 메서드를 호출하려면 인스턴스를 생성해야 한다.
  foo.x(); // x

  // 정적 메서드
  Foo.x = function () {
    console.log('x');
  };

  // 정적 메서드는 인스턴스를 생성하지 않아도 호출할 수 있다.
  Foo.x(); // x
  ```

- **프로퍼티 존재 확인**  
  **[in 연산자]** - in 연산자는 객체 내에 특정 프로퍼티가 존재하는지 여부를 확인한다.

  ```javascript
  /**
   * key: 프로퍼티 키를 나타내는 문자열
   * object: 객체로 평가되는 표현식
   */

  key in object;

  const person = {
    name: 'Kim',
    address: 'Seoul'
  };

  // person 객체에 name 프로퍼티가 존재한다.
  console.log('name' in person); // true
  // person 객체에 age 프로퍼티가 존재하지 않는다.
  console.log('age' in person); // false

  // person 객체에는 toString이라는 프로퍼티가 없지만 ture 값이 나온다.
  // 이는 in 연산자가 person 객체가 속한 프로토타입 체인 상에 존재하는 모든 프로토타입에서 toString 프로퍼티를 검색했기 때문이다.
  // toString은 Object.prototype의 메서드다.
  console.log('toString' in person); // true
  ```

  **[Reflect.has]** - in 연산자 대신 ES6에서 도입된 Reflect.has 메서드를 사용할 수도 있다. Reflect.has 메서드는 in 연산자와 동일하게 동작한다.

  ```javascript
  const person = { name: 'Kim' };

  console.log(Reflect.has(person, 'name')); // true
  console.log(Reflect.has(person, 'toString')); // true
  ```

  **[Object.prototype.hasOwnProperty]**: Object.prototype.hasOwnProperty 메서드를 사용해도 객체에 특정 프로퍼티가 존재하는지 확인할 수 있다.  
  Object.prototype.hasOwnProperty 메서드는 이름에서 알 수 있듯이 인수로 전달받은 프로퍼티 키가 객체 고유의 프로퍼티 키인 경우에만 true를 반환하고 상속받은 프로토타입의 프로퍼티 키인 경우 false를 반환한다.

  ```javascript
  console.log(person.hasOwnProperty('name')); // true
  console.log(person.hasOwnProperty('age')); // false

  console.log(person.hasOwnProperty('toString')); // false
  ```

- **프로퍼티 열거**: 객체의 모든 프로퍼티를 순회하며 열거하려면 for ... in 문을 사용한다.

  ```javascript
  for (변수선언문 in 객체) { ... };

  const person = {
    name: 'Kim',
    address: 'Seoul'
  };

  // for...in 문의 변수 prop에 peroson  객체의 프로퍼티 키가 할당된다.
  // for...in 문도 객체가 상속받은 모든 프로토타입의 프로퍼티를 열거한다.
  // 하지만 toString과 같은 Object.prototype의 프로퍼티가 열거되지 않는다.
  for (const key in person) {
    console.log(key + ': ' + person[key]);
  }

  // name: Kim
  // address: Seoul
  ```

  for in 문은 in 연산자처럼 순회 대상 객체의 프로퍼티뿐만 아니라 상속받은 프로토타입의 프로퍼티까지 열거한다. 하지만 위 예제의 경우 toString과 같은 Object.prototype의 프로퍼티가 열거되지 않는다.  
  이는 toString 메서드가 열거할 수 없도록 정의되어 있는 프로퍼티이기 때문이다. Object.prototype.string 프로퍼티의 프로퍼티 어트리뷰트 [[Enumerable]]의 값이 false이기 때문이다. 이 어트리뷰트는 프로퍼티의 열거 가능 여부를 나타내며 불리언 값을 갖는다.  
  <br>
  **for...in 문은 객체의 프로토타입 체인 상에 존재하는 모든 프로토타입의 프로퍼티 중에서 프로퍼티 어트리뷰트 [[Enumerable]]의 값이 true인 프로퍼티를 순회하며 열거한다.**

  ```javascript
  const person = {
    name: 'Kim',
    address: 'Seoul',
    __proto__: { age: 20 }
  };

  for (const key in person) {
    console.log(key + ': ' + person[key]);
  }

  // name: Kim
  // address: Seoul
  // age: 20
  ```

  for...in 문은 프로퍼티 키가 심벌인 프로퍼티는 열거하지 않는다.

  ```javascript
  const sym = Symbol();
  const obj = {
    a: 1,
    [sym]: 10
  };

  for (const key in obj) {
    console.log(key + ': ' + obj[key]);
  }

  // a: 1
  ```

  상속받은 프로퍼티는 제외하고 객체 자신의 프로퍼티만 열거하려면 Object.prototype.hasOwnProperty 메서드를 사용하여 객체 자신의 프로퍼티인지 확인해야 한다.

  ```javascript
  const person = {
    name: 'Kim',
    address: 'Seoul',
    __proto__: { age: 20 }
  };

  for (const key in person) {
    // 객체 자신의 프로퍼티인지 확인한다.
    if (!person.hasOwnProperty(key)) {
      continue;
    }
    console.log(key + ': ' + person[key]);
  }
  ```

  for...in 문은 프로퍼티를 열거할 때 순서를 보장하지 않으므로 주의해야한다. 하지만 대부분 모던 브라우저는 순서를 보장하고 숫자(사실은 문자열)인 프로퍼티 키에 대해서는 정렬을 실시한다.

  ```javascript
  const obj = {
    2: 2,
    3: 3,
    1: 1,
    b: 'b',
    a: 'a'
  };

  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) continue;
    consloe.log(key + ': ' + obj[key]);
  }

  /*
  1: 1
  2: 2
  3: 3
  b: b
  a: a
  */
  ```

  배열에는 for...in 문을 사용하지 말고 일반적으로 for 문이나 for...of 문 또는 Array.prototype.forEach 메서드를 사용하기를 권장한다.  
  사실 배열도 객체이므로 프로퍼티와 상속받은 프로퍼티가 포함될 수 있다.  
  <br>
  **[Object.keys/values/entries 메서드]** - 객체 자신의 고유 프로퍼티만을 열거하기 위해서는 for...in 문을 사용하는 것보다 Object.keys/values/entries 메서드를 사용하는 것을 권장한다.  
  <br>
  Object.keys 메서드는 객체 자신의 열거 가능한 프로퍼티 **키를 배열로 반환**한다.

  ```javascript
  const person = {
    name: 'Kim',
    address: 'Seoul',
    __proto__: { age: 20 }
  };

  console.log(Object.keys(person)); // ["name", "address"]
  ```

  ES8에서 도입된 Object.values 메서드는 객체 자신의 열거 가능한 프로퍼티 **값을 배열로 반환**한다.

  ```javascript
  console.log(Object.values(person)); // ["Lee", "Seoul"]
  ```

  ES8에서 도입된 Object.entries 메서드는 객체 자신의 열거 가능한 프로퍼티 키와 값의 쌍의 배열을 배열에 담아 반환한다.

  ```javascript
  console.log(Object.entries(person)); // [["name", "Kim"], ["address", "Seoul"]]

  Object.entries(person).forEach(([key, value]) => console.log(key, value));

  /*
  name Lee
  address Seoul
  */
  ```

## strict mode

- **strict mode**: 자바스크립트 언어의 문법을 좀 더 엄격히 적용하여 오류를 발생시킬 가능성이 높거나 자바스크립트 엔진의 최적화 작업에 문제를 일으킬 수 있는 코드에 대해 명시적인 에러를 발생시킨다.
  **[전역에 strict mode 적용하는 것은 피하자]**

  ```html
  <body>
    <script>
      'use strict';
    </script>
    <script>
      x = 1; // 에러가 발생하지 않는다.
      console.log(x); // 1
    </script>
    <script>
      'use strict';

      y = 1; // ReferenceError: y is not defined
      console.log(y);
    </script>
  </body>
  ```

  스크립트 단위로 적용된 strict mode는 다른 스크립트에 영향을 주지 않고 해당 스크립트에 한정되어 적용된다.  
  하지만 strict mode 스크립트와 non-strict mode 스크립트를 혼용하는 것은 오류를 발생시킬 수 있다. 특히 외부 서드파티 라이브러리를 사용하는 겨우 라이브러리가 non-strict mode인 경우도 있기 때문에 전역 strict mode를 적용하는 것은 바람직하지 않다. 이러한 경우 즉시 실행 함수로 스크립트 전체를 감싸서 스코프를 구분하고 즉시 실행 함수의 선두에 strict mode를 적용한다.

  ```javascript
  // 즉시 실행 함수의 선두에 strict mode 적용
  (function () {
    'use strict';
  })();
  ```

  **[함수 단위로 strict mode를 적용하는 것도 피하자]**: 어떤 함수에는 strict mode를 적용하고 어떤 함수는 strict mode를 적용하지 않는 것은 바람직하지 않으며 모든 함수에 일일이 strict mode를 적용하는 것은 번거로운 일이다. 그리고 strict mode가 적용된 함수가 참조할 함수 외부의 컨텍스트에 strict mode를 적용하지 않는다면 이 또한 문제가 발생할 수 있다.  
  **따라서 strict mode는 즉시 실행 함수롷 감싼 스크립트 단위로 적용하는 것이 바람직하다.**

  ```javascript
  (functuon() {
    // non-strict mode
    var let = 10; // 에러가 발생하지 않는다.

    function foo() {
      'use strict';

      let = 20; // SyntaxError: Unexpected strict mode reserved word
    }
  }());
  ```

- **ESLint**: ESLint 같은 린트 도구를 사용해도 strict mode와 유사한 효과를 얻을 수 있다. 린트 도구는 정적 분석기능을 통해 소스코드를 실행하기 전에 소스코드를 스캔하여 문법적 오류만이 아니라 잠재적 오류까지 찾아내고 오류의 원인을 리포팅해주는 유용한 도구다.  
  **린트 도구는 strict mode가 제한하는 오류는 물론 코딩 컨벤션을 설정 파일 형태로 정의하고 강제할 수 있기 때문에 더욱 강력한 효과를 얻을 수 있다. 따라서 strict mode보다 린트 도구의 사용을 선호한다.**

## 빌트인 객체

- **전역 객체**: 전역 객체는 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해 어떤 객체보다도 먼저 생성되는 특수한 객체이며, 어떤 객체에도 속하지 않은 최상위 객체다.  
  전역 객체는 자바스크립트 환경에 따라 지칭하는 이름이 제각각이다. 브라우저 환경에서는 window(또는 self, this, frames)가 전역 객체를 가리키지만 Node.js 환경에서는 global이 전역 객체를 가리킨다.

  **[globalThis]** - ES11(ECMAScript 11)에서 도입된 globalThis는 브라우저 환경과 Node.js 환경에서 전역 객체를 가리키던 다양한 식별자를 통일한 식별자다. globalThis는 표준 사양이므로 ECMAScript 표준 사양을 준수하는 모든 환경에서 사용할 수 있다.

  ```javascript
  // 브라우저 환경
  globalThis === this; // true
  globalThis === window; // true
  globalThis === self; // true
  globalThis === frames; // true

  // Node.js 환경(12.0.0 이상)
  globalThis === this; // true
  globalThis === global; // true
  ```

  전역 객체는 자신은 어떤 객체의 프로퍼티도 아니며 객체의 계층적 구조상 표준 빌트인 객체와 호스트 객체를 프로퍼티로 소유한다는 것을 말한다.

  ```javascript
  // var 키워드로 선언한 전역 변수
  var foo = 1;
  console.log(window.foo); // 1

  // 선언하지 않은 변수에 값을 암묵적 전역. bar는 전역 변수가 아니라 전역 객체의 프로퍼티다.
  bar = 2; // window.bar = 2
  console.log(window.bar); // 2

  let test = 123;
  console.log(window.test); // undefined
  ```

  하지만 let이나 const 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 아니다. 즉, window.foo와 같이 접근할 수 없다. let이나 const 키워드로 선언한 전역 변수는 보이지 않는 개념적인 블록(전역 렉시컬 환경의 선언적 환경 레코드) 내에 존재하게 된다.

## This

**자바스크립트의 this는 함수가 호출되는 방식에 따라 this에 바인딩될 값, 즉 this 바인딩이 동적으로 결정된다.**  
<br>
**렉시컬 스코프와 this 바인딩은 결정 시기가 다르다.** 함수의 상위 스코프를 결정하는 방식인 렉시컬 스코프는 함수 정의가 평가되어 함수 객체가 생성되는 시점에 상위 스코프를 결정한다. 하지만 this 바인딩은 함수 호출 시점에 결정된다.  
<br>

```javascript
// this 바인딩은 함수 호출 방식에 따라 동적으로 결정된다.
const foo = function () {
  console.dir(this);
};

// 동일한 함수도 다양한 방식으로 호출할 수 있다.

// 1. 일반 함수 호출
// foo 함수를 일반적인 방식으로 호출
// foo 함수 내부의 this는 전역 객체 window를 가리킨다.
foo(); // window

// 2. 메서드 호출
// foo 함수를 프로퍼티 값으로 할당하여 호출
// foo 함수 내부의 this는 메서드를 호출한 객체 obj를 가리킨다.
const obj = { foo };
obj.foo(); // obj

// 3. 생성자 함수 호출
// foo 함수를 new 연산자와 함께 생성자 함수로 호출
// foo 함수 내부의 this는 생성자 함수가 생성한 인스턴스를 가리킨다.
new foo(); // foo {}

// 4. Function.prototype.apply/call/bind 메서드에 의한 간접 호출
// foo 함수 내부의 this는 인수에 의해 결정된다.
const bar = { name: 'bar };

foo.call(bar); // bar
foo.appay(bar); // bar
foo.bind(bar)(); // bar
```

**[⬆ back to top](#table-of-contents)**

# };

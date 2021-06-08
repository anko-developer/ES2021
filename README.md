# Vanilla JavaScript Guide() {

*Is explain*

> ES2021 (ES12)가 업데이트 되었다.  
기초 문법부터 하나하나 다시 정확하게 이해하고 넘어가고자 만든 저장소다.   
점심 먹고 1시간, 퇴근하고 1시간, 하루 2시간 나를 위한 시간을 갖도록 하자 :D
([anko-developer](https://github.com/anko-developer))


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

    getStringLength() // 0
    getStringLength('hi') // 2
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
    console.log(length) // 0
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
**[⬆ back to top](#table-of-contents)**

# };

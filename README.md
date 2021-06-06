# Vanilla JavaScript Guide() {

*Is explain*

> ES2021 (ES12)가 업데이트 되었다.  
기초 문법부터 하나하나 다시 정확하게 이해하고 넘어가고자 만든 저장소다.   
점심 먹고 1시간, 퇴근하고 1시간, 하루 2시간 나를 위한 시간을 갖도록 하자 :D
([anko-developer](https://github.com/anko-developer))

<!-- 
This guide is available in other languages too. See [Translation](#translation)

Other Style Guides

  - [ES5 (Deprecated)](https://github.com/airbnb/javascript/tree/es5-deprecated/es5)
  - [React](react/)
  - [CSS-in-JavaScript](css-in-javascript/)
  - [CSS & Sass](https://github.com/airbnb/css)
  - [Ruby](https://github.com/airbnb/ruby) -->

## Table of Contents

  1. [Clean Coding](#clean-coding)
  1. [Type](#type)
  <!-- 1. [Clean Coding](#references) -->

## Clean Coding

  - **Important**: 아래 3가지는 반드시 지켜야 할 것들 이라고 생각한다.

    ```javascript
    DRY 하게, (Don't Repeat Yourself),  
    계속 반복되어지는 것을 피하자.   
    KISS 하게, (Keep It Simple, Stupid),  
    코드는 심플하고 멍청하게.   
    YAGNI 하게, (You Ain't Gonna Need It),  
    깨끗하게, 변경이 쉽게, 유지보수 용이하게 (O)  
    필요하지 않는 기능, 사용하지 않는 기능, 지나치게 미래지향적 (X)
    ```

## Type

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

**[⬆ back to top](#table-of-contents)**

# };

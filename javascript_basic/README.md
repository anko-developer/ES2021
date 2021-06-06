Vanilla JS
=====================

## Um..
ES2021 (ES12)가 업데이트 되었다.  
기초 문법부터 하나하나 다시 정확하게 이해하고 넘어가고자 만든 저장소다.   
하루 2시간씩 아래처럼 나를 위한 시간을 갖도록 하자 :D
```
const plan = {
  first: '휴게실에서 점심 먹고 자리에서 1시간 공부하기',
  second: '퇴근 후 자리에서 1시간 공부하기',
  third: '모던 자바스크립트 Deep Dive 도서 정독 :D'
}
```

## Clean Code를 만드는 방법
-  DRY 하게, Don't Repeat Yourself, 계속 반복되어지는 것을 피하자
- KISS 하게, Keep It Simple, Stupid, 코드는 심플하고 멍청하게
- YAGNI 하게, You Ain't Gonna Need It,  
깨끗하게, 변경이 쉽게, 유지보수 용이하게 <strong>O</strong>  
필요하지 않는 기능, 사용하지 않는 기능, 지나치게 미래지향적 <strong>X</strong>



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

  1. [Clean Coding](#types--primitives)
  <!-- 1. [Clean Coding](#references) -->

## Clean Coding

  - **Important**: 반드시 지켜야 할 것들 이라고 생각한다.

    ```javascript
    DRY 하게, Don't Repeat Yourself,  
    계속 반복되어지는 것을 피하자   
    KISS 하게, Keep It Simple, Stupid,  
    코드는 심플하고 멍청하게   
    YAGNI 하게, You Ain't Gonna Need It,  
    깨끗하게, 변경이 쉽게, 유지보수 용이하게 (O)  
    필요하지 않는 기능, 사용하지 않는 기능, 지나치게 미래지향적 (X)
    ```

    - Symbols and BigInts cannot be faithfully polyfilled, so they should not be used when targeting browsers/environments that don’t support them natively.

  
**[⬆ back to top](#table-of-contents)**

# };

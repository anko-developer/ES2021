(function () {
  'use strict';

  // 잠깐 forEach를 통해 prototype 알아보기
  const item = document.querySelectorAll('.study__item');
  const item1 = document.getElementsByClassName('study__item');
  const item2 = ['test', 'test1'];

  console.log('item', item); // NodeList - prototype 에 forEach 를 상속 받아서 사용 가능
  console.log('item1', item1); // HTMLCollection - forEach 가 prototype 에 없음
  console.log('item2', item2); // Array - 배열이니까 forEach 당연히 사용 가능
  
  item.forEach((el, index) => {
    console.log(`${el} 의 ${index}`);
  });

  Array.from(item1).forEach((el, index) => {
    console.log(`${el} 의 ${index}`);
  });

  item2.forEach((el, index) => {
    console.log(`${el} 의 ${index}`);
  });


  // 표현식 - 함수 표현식에서는 함수명을 생략하는 것이 일반적, 호이스팅 때문에 함수 표현식을 선호한다.
  const app = () => {
    console.log('test');
  };
  app();

  // 기명 함수 표현식
  const foo = function test(a, b) {
    return a * b;
  };

  // 익명 함수 표현식
  const foo1 = function(a, b) {
    return a * b;
  };

  const bar = foo1;

  console.log(foo1(10, 5)); // 50
  // console.log(test(10, 5)); // error - 함수는 일급객체이기 때문에 변수에 할당할 수 있는데 이 변수는 함수명이 아니라 할당된 함수를 기리키는 참조값을 저장하게 된다.
  // 함수 호출시 함수명이 아니라 함수를 가리키는 변수명을 사용하여야 한다.

  console.log(bar(10, 10)); // bar와 foo는 동일한 익명 함수의 참조값을 갖게 된다.


  var increase = function (num) {
    return ++num;
  };
  
  var decrease = function (num) {
    return --num;
  };
  
  var predicates = { increase, decrease };
  
  // 3. 함수의 매개변수에 전달할 수 있다.
  // 4. 반환값으로 사용할 수 있다.
  function makeCounter(predicate) {
    var num = 0;
  
    return function () {
      num = predicate(num);
      return num;
    };
  }

  var increaser = makeCounter(predicates.increase);
  console.log(increaser());
  console.log(increaser());


  // 객체형(참조형) 파라미터는 참조에 의한 호출로 동작한다.
  // 참조 타입 인수를 함수의 파라미터 값으로 전달 할 때 매개변수에 값이 복사되지 않고 객체의 참조값이 파라미터에 저장되어 함수로 전달되는 방식이다.
  // 이때 함수 내에서 파라미터의 참조값을 이용하여 객체의 값을 변경했을 때 전달되어진 참조형의 인수값도 같이 변경된다.

  function changeVal(primitive, obj) {
    primitive += 100;
    obj.name = 'Kim';
    obj.gender = 'female';
  }
  
  var num = 100;
  var obj = {
    name: 'Lee',
    gender: 'male'
  };
  
  console.log(num); // 100
  console.log(obj); // Object {name: 'Lee', gender: 'male'}
  
  changeVal(num, obj);
  
  console.log(num); // 100
  console.log(obj); // Object {name: 'Kim', gender: 'female'}

  // arrow function - 기본 함수와 this 바인딩 방식이 다르고, prototype 프로퍼티가 없으며 arguments 객체를 생성하지 않는다
  const anko = (x, y) => x + y;
  console.log(anko(2, 5)); // 7

  // ES6에서 도입된 파라미터 기본값을 사용하면 함수 내에서 수행하던 인수 체크 및 초기화를 간소화할 수 있다.
  // 파라미터 기본값은 파라미터에 인수를 전달하지 않았을 경우와 undefined를 전달한 경우에만 유효하다.
  function wook(a = 0, b = 0, c = 0) {
    return a + b + c;
  }

  // 재귀 함수는 자기 자신을 호출하는 행위를 말한다
  // 재귀 함수는 반복문을 사용하는 것보다 재귀 함수를 사용하는 편이 더 직관적으로 이해하기 쉬울 때만 한정적으로 사용하는 것이 바람직하다
  function countdown(n) {
    if (n < 0) {
      return;
    }

    console.log(n);
    countdown(n - 1); // 재귀 호출
  }

  countdown(10);

  // 팩토리얼은 1부터 자신까지의 모든 양의 정수의 곱이다
  function factorial(n) {
    // 탈출 조건: n이 1 이하일 때 재귀 호출을 멈춘다.
    if (n <= 1) {
      return 1;
    }

    // 재귀 호출
    return n * factorial(n - 1);
  }

  // 함수 표현식으로도 똑같이 구현이 가능하다.
  // const factorial = function studyFunc(n) {
  //   if (n <= 1) {
  //     return 1;
  //   }
  //   return n * factorial(n - 1);
  // }

  console.log(factorial(5)); // 5! = 5 * 4 * 3 * 2 * 1 = 120

  // 콜백 함수
  function repeat(n, f) {
    for (let index = 0; index < n; index++) {
      f(index);
    }
  }

  const logAll = function (i) {
    console.log(i);
  }

  repeat(10, logAll);

  const logOdds = function (i) {
    if (i % 2) console.log(i);
  };

  repeat(5, logOdds);

  // 이렇게 콜백 함수를 익명 함수 리터럴로 정의하면서 곧바로 고차 함수에 전달하는 것이 일반적이지만
  // 콜백함수를 다른 곳에서도 호출할 필요가 있거나, 함수가 자주 호출된다면 함수 외부에서 콜백 함수를 정의한 후 함수 참조를 고차 함수에 전달하는 편이 효율적이다
  // repeat(5, function (i) {
  //   if (i % 2) console.log(i);
  // });


  // 순수 함수 (함수 외부 상태의 변경을 지양하는 순수 함수를 하용하는 것이 좋다)
  // 어떤 외부 상태에 의존하지 않고 오직 매배견수를 통해 함수 내부로 전달된 인수에게만 의존해 반환값을 만든다.
  // 함수 외부 상태를 변경하지 않는다, 어떤 외부 상태에도 의존하지 않으며 외부 상태를 변경하지도 않는 함수다.
  let count = 0;

  function plus(n) {
    return ++n;
  }

  count = plus(count);
  console.log('count', count);

  count = plus(count);
  console.log('count', count);
})();
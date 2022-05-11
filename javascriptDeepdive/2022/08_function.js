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

  // to rest
})();
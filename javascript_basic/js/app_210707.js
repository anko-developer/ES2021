(function() {
  'use strict';

  const Person = (function() {
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
  }());

  const me = new Person('Kim');
  console.log(me.constructor); // Person
}());
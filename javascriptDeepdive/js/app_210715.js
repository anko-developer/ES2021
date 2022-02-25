(function () {
  const Person = (function () {
    function Person(name) {
      this.name = name;
    }

    Person.prototype = {
      constructor: Person,
      say() {
        console.log(this.name);
      }
    };

    return Person;
  })();

  const me = new Person('Kimm');
  me.say();
  console.log(me.__proto__); // Person.prototype
  console.log(me.constructor); // 객체로 생성한 prototype에는 constructor 프로퍼티가 없기 때문에 Object를 가리킨다. prototype에서 constructor 프로퍼티를 따로 생성해서 생성자 함수를 가리켜주면 이상 없다.
})();

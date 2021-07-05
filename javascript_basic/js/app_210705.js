(function () {
  const Person = function (name) {
    this.name = name;
  };

  // 프로토타입 메서드
  Person.prototype.sayHello = function () {
    console.log(`Hi my name is ${this.name}`);
  };

  const me = new Person('Kim');
  const you = new Person('Lee');
  
  me.sayHello();
  you.sayHello();
})();

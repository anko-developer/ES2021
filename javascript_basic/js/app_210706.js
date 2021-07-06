(function () {
  const Person = function (name) {
    this.name = name;
  };

  // Person.prototype = {
  //   wow: 'test'
  // };

  Person.prototype.wow = 'test';

  const test = new Person('hi');
  console.log(test.__proto__);
  console.log(Person.prototype.__proto__.constructor); // Person.prototype의 프로토타입은 Object.prototype이다. 프로토타입의 프로토타입은 언제나 Object.prototype이다.
})();

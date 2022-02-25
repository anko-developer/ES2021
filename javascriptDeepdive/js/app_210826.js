(function () {
  const Person = (function () {
    function Person(name) {
      this.name = name;
    }

    Person.prototype = {
      constructor: Person,
      sayHello() {
        console.log(`Hi! ${this.name}`);
      }
    };

    return Person;
  })();

  const test = new Person('명욱');
  test.sayHello();
})();

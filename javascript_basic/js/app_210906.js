(function () {
  const person = (function () {
    const Person = function (name) {
      this.name = name;
    };

    Person.prototype = {
      constructor: Person,
      sayHello() {
        console.log(`${this.name} 입니다.`);
      }
    };

    return Person;
  })();

  const um = {
    name: 'anko'
  };

  const test = new person('kim');
  test.sayHello.call(um);
})();

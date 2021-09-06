(function () {
  const Wow = (function () {
    const Person = function (name) {
      this.name = name; // this는 생성될 instance를 가리킨다
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

  const test = new Wow('kim');
  test.sayHello.call(um);
})();

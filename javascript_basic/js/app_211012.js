(function () {
  const Person = (function () {
    const Person = function (name) {
      this.name = name;
    };

    Person.prototype = {
      constructor: Person,
      say() {
        console.log(`${this.name} test!`);
      }
    };

    return Person;
  })();

  const test = new Person('wook');

  // 실행 컨텍스트 개념 복습
  const foo = 1;

  {
    console.log(foo);
    let foo = 2;
  }
})();

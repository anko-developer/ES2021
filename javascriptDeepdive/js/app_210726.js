(function () {
  // prototype 복습 끄적끄적
  const person = (function () {
    const Person = function (name) {
      this.name = name;
    };

    Person.prototype = {
      constructor: Person,
      say() {
        console.log(this.name);
      }
    };

    return Person;
  })();

  const test = new person('kim');
  test.say();
})();

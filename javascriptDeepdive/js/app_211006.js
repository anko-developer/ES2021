(function () {
  const Person = (function () {
    const Person = function (name) {
      this.name = name;
    };

    Person.prototype = {
      constructor: Person,
      say() {
        console.log(`${this.name} 안녕?`);
      }
    };

    return Person;
  })();

  const test = new Person('kim');

  const wow = {
    name: '하하'
  };
  
  test.say.call(wow);
})();

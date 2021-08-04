(function () {
  const person = (function () {
    const Person = function (name) {
      this.name = name;
    };

    Person.prototype = {
      constructor: Person,
      say() {
        console.log(`Hi! my name is ${this.name}`);
      }
    };

    return Person;
  })();

  const um = {
    name: 'wow'
  };

  const test = new person('kim');
  test.say.call(um); // um 객체에 this 바인딩 Hi! my name is wow
})();

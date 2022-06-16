(function() {
  function Person(test) {
    this.test = test;
  }

  Person.prototype = {
    constructor: Person,
    gogo() {
      console.log(this.test);
    },
    num: 1,
    string: '문자열.'
  };

  const i = new Person('test');
  i.gogo();
})();
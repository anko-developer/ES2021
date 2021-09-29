(function () {
  const Person = (function () {
    const Person = function (name) {
      this.name = name;
    };

    Person.prototype = {
      constructor: Person,
      say() {
        console.log(`안녕? 나는 ${this.name} 입니다.`);
      }
    };

    return Person;
  })();

  const me = new Person('김명욱');
  me.say();

  
})();

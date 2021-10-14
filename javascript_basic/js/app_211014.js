(function () {
  const Person = (function () {
    const Person = function (name) {
      this.name = name;
    };

    Person.prototype = {
      constructor: Person,
      say(y) {
        console.log(y);
      },
      good() {
        console.log(this.name);
      }
    };

    return Person;
  })();

  const foo = new Person('명욱');
  foo.say('ddd');
  foo.good();

  // 실행컨텍스트 정리 끝
})();

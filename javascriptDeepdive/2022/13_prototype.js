(function() {
  function Circle(radius) {
    this.radius = radius;
  }

  Circle.prototype.getArea = function() {
    return Math.PI * this.radius ** 2;
  };

  const circle1 = new Circle(1);
  const circle2 = new Circle(2);

  console.log(circle1.getArea === circle2.getArea);

  function Person(name) {
    this.name = name;
    this.test = function() {
      console.log(this.name);
    };
  }

  const good = {
    name: 'anko'
  };

  const me = new Person('Kim');
  // me.call(good);
  // console.log(me.constructor === Person); // true

  console.log(me.test.call(good));


})();
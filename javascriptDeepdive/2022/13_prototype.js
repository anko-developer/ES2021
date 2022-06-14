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






  const item = document.querySelectorAll('.item');
  const item1 = document.getElementsByClassName('item');
  const test00 = [
    {
      name: 1
    },
    {
      num: 2
    }
  ]
  // Array.prototype.forEach.call(item, (el, index) => {
  //   console.log(el);
  // });

  console.log(item1);
  console.log(test00);

  Array.from(item).forEach(el => {
    console.log(el);
  });

  Array.prototype.forEach.call(item1, (el, index) => {
    console.log(el);
  });

  test00.forEach((el, index) => {
    console.log(el);
  });



  const Anko = (function() {
    function Anko(name) {
      this.name = name;
    }

    Anko.prototype = {
      constructor: Anko,
      sayHello() {
        console.log(`Hi! My name is ${this.name}`);
      }
    };

    return Anko;
  }());

  const you = new Anko('wook');
  
  console.log(you.constructor === Anko);


  const ming = {
    2: 2,
    3: 3,
    a: '와',
    b: '후'
  };

  for (const key in ming) {
    if (!ming.hasOwnProperty(key)) continue;
    console.log(key + ':' + ming[key]);
  }


  console.log(Object.keys(ming));
})();
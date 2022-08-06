// class complete
class App {
  #name = '';

  constructor(name) {
    this.#name = name;
  }

  get myName() {
    return this.#name;
  }
}

const test = new App('명욱');
console.log(test.myName);





// 조건에 따라 동적으로 상속 대상을 결정하는 서브클래스

function Base() {}

class Base2 {
  constructor(name) {
    this.name = name;
  }
}

let condition = false;

class Derived extends (condition ? Base : Base2) {
  go() {
    console.log(this.name);
  }
}

const test1 = new Derived('이건가');
test1.go(); // 이건가, 서브클래스에서 constructor을 생략하면 암묵적으로 constructor이 정의되는데,
// constructor(...args) { super(...args); } 가 정의 되고, super()는 수퍼클래스의 constructor를 호출하여 인스턴스를 생성한다.
// 이리하여 나는 서브클래스에 인자값으로 '이건가' 값을 넘겼는데 암묵적으로 정의된 constructor 안에 있는 super()에 값이 전달되어 호출 할 수 있게 된 것.

console.log(test1 instanceof Base2); // true




class Parent {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return `Hi! ${this.name}`;
  }
}

class Child extends Parent {
  come() {
    return `${super.sayHi()} 입니다.`; // super를 참조하면 수퍼클래스의 메서드를 호출할 수 있다.
  }
}

const test3 = new Child('앙꼬');
console.log(test3.come());




class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  toString() {
    return `width = ${this.width}, height ${this.height}`;
  }
}

class ColorRectangle extends Rectangle {
  constructor(width, height, color) {
    super(width, height);
    this.color = color;
  }

  // 메서드 오버라이딩
  toString() {
    return super.toString() + `, color = ${this.color}`;
  }
}

const colorReactangle = new ColorRectangle(2, 4, 'red');

// 상속을 통해 getArea 메서드 호출
console.log(colorReactangle.getArea()); // 8

// 오버라이딩된 toString 메서드 호출
console.log(colorReactangle.toString()); // width = 2, height 4, color = red
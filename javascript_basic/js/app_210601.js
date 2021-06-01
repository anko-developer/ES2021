(function() {
  'use strict';

  function getLength(str = '') {
    return console.log(str.length);
  }

  getLength();
  getLength('김명욱');

  const MYAPP = {
    hi: "응",
    say: function() {
      console.log('test is ' + this.hi);
    }
  };

  console.log(MYAPP.hi);
  MYAPP.say();


  /**
   * 생성자 함수 이름은 일반적으로 대문자로 시작한다, 이것은 생성자 함수임을 인식하도록 도움을 준다.
   * 프로퍼티 또는 메소드명 앞에 기술한 'this'는 생성자 함수가 생성할 인스턴스(instance)를 가리킨다.
   * 'this'에 연결(바인딩)되어 있는 프로퍼티와 메소드는 public(외부에서 참조가능)하다.
   * 생성자 함수 내에서 선언된 일반 변수는 private(외부에서 참조 불가능)하다. 즉, 생성자 함수 내부에서는 자유롭게 접근이 가능하나 외부에서는 접근 할 수 없다.
   */
  function Person(name, gender) {
    let married = true; // private
    this.name = name; // public
    this.gender = gender; // public
    this.sayHello = function() { // public
      console.log('Hi! ' + this.name);
    };
  }

  const person1 = new Person('명욱', '남');
  const person2 = new Person('앙꼬', '여');

  console.log('person1: ', typeof person1);
  console.log('person2: ', typeof person2);
  console.log('person1: ', person1);
  console.log('person2: ', person2);
  console.log(person1.gender); // '남'
  console.log(person2.married); // undefined

  person1.sayHello();
  person2.sayHello();


  const test = {
    gender: 'male',
    1: 10
  }
  
  console.log(test.gender);
  // console.log(test['gender']);
  console.log(test['1']);
  delete test['1']; 
  console.log(test);


  // for-in 문
  const app = {
    'first-name': 'Kim',
    gender: 'male'
  }

  // prop에 객체의 프로퍼티 이름이 반환된다. 단, 순서는 보장되지 않음.
  for (let prop in app) {
    console.log(prop + ': ' + app[prop]);
  }

  /*
  first-name: Kim
  gender: male
  */

  const array = ['one', 'two'];

  // index에 배열의 경우 인덱스가 반환된다.
  for(let index in array) {
    console.log(array[index]);
  }

  /*
  one
  two
  */


  /**
   * 배열에는 사용하지 않는 것이 좋다,
   * 프로퍼티의 순서가 보장되지 않는다. 그 이유는 원래 객체의 프로퍼티에는 순서가 없기 때문이다. 배열은 순서를 보장하는 데이터 구조이지만 객체와 마찬가지로 순서를 보장하지 않는다.
   * 배열 요소들만을 순회하지 않는다.
   * 이와 같은 for-in 문의 단점을 극복하기 위해 ES6에서 for-of 문이 추가되었다.
   * for-in 문은 객체의 프로퍼티를 순회하기 위해 사용하고 for-of 문은 배열의 요소를 순회하기 위해 사용한다.
   */

  const array1 = [1, 2, 3, '와우'];
  array1.name = 'my array';

  for (const value of array1) {
    // console.log(array1[value - 1]);
    console.log(value);
  }


  // Pass-by-reference (참조 타입)

  // foo와 bar는 같은 값을 참조하고 있기 때문에 값이 공유된다.
  const foo = {
    val: 10
  }

  const bar = foo;
  console.log(foo.val, bar.val); // 10, 10
  console.log(foo === bar); // true
  
  bar.val = 20;
  console.log(bar.val); // 20
  console.log(foo === bar); // true

  
  const foo1 = { val: 10 };
  const bar1 = { val: 10 };
  console.log(foo1 === bar1); // 서로 참조하는 값이 다르므로 false

  const baz = bar1;
  console.log(baz === bar1); // baz와 bar1은 같은 참조 값을 바라보기 때문에 true

  
  var x = 1;
  var y = x;

  x = 10;
  console.log(x, y);
  console.log(x === y); // false
}());
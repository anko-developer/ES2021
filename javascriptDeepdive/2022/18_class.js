(function() {
  // 선언
  class Person {
    // 생성자
    constructor(name) {
      // 인스턴스 생성 및 초기화
      this.name = name; // name 프로퍼티는 public 이다
    }

    // 프로토타입 메서드
    sayHi() {
      console.log(`Hi! ${this.name}`);
    }

    // 정적 메서드
    static sayHello() {
      console.log('Hello!');
    }
  }

  const me = new Person('앙꼬');

  // 인스턴스의 프로퍼티 참조
  console.log(me.name);

  // 프로토타입 메서드 호출
  me.sayHi();

  // 정적 메서드 호출
  Person.sayHello();


  console.log('me', me);

  
  class Calc {
    constructor(num1, num2, num3) {
      this.num1 = num1;
      this.num2 = num2;
      this.num3 = num3;
    }

    // 인자값 중에 가장 큰 수 구하기
    max() {
      let result = this.num1 > this.num2 ? this.num1 : this.num2;
      result = result > this.num3 ? result : this.num3;
      console.log(result);
    }
  }

  const test = new Calc(10, 1, 30);
  test.max();
})();
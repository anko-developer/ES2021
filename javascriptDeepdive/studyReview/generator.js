(function () {
  function* genFunc() {
    yield 1;
  }

  const getFunc1 = function* () {
    try {
      yield 1;
      yield 2;
      yield 3;
    } catch(err) {
      console.error(err);
    }
  };

  const generator = genFunc();
  console.log(generator.next());
  console.log(generator.next());
  // console.log(generator.return('끝내자!')); // {value: '끝내자!', done: true}
  // console.log(generator.throw('Error')); // {value: undefined, done: true}

  
  // async 함수는 명시적으로 프로미스를 반환하지 않더라도
  // async 함수는 암묵적으로 반환값을 resolve하는 프로미스를 반환한다.

  // async 함수 선언문
  async function foo(n) {
    return n;
  }
  foo(1).then(v => console.log(v)); // 1

  // async 함수 표현식
  const bar = async function(n) {
    return n;
  };
  bar(2).then(v => console.log(v)); // 2

  // async 화살표 함수
  const baz = async n => n;
  baz(3).then(v => console.log(v)); // 3

  // async 메서드
  const obj = {
    async foo(n) {
      return n;
    }
  };
  obj.foo(4).then(v => console.log(v)); // 4

  // async 클래스 메서드
  class MyClass {
    async bar(n) { 
      return n;
    }
  }
  const myClass = new MyClass();
  myClass.bar(5).then(v => console.log(v)); // 5


  // await 함수
  async function foo() {
    const a = await new Promise(resolve => setTimeout(() => resolve(1), 3000));
    const b = await new Promise(resolve => setTimeout(() => resolve(2), 2000));
    const c = await new Promise(resolve => setTimeout(() => resolve(3), 1000));

    console.log('첫번째', [a, b, c]);
  }

  foo(); // 약 6초 소요

  // foo 함수의 a, b, c는 서로 연관이 없이 개별적으로 수행되는 비동기 처리이므로
  // 앞선 비동기 처리가 완료될 때까지 개디해서 순차적으로 처리할 필요가 없다.

  async function foo1() {
    const res = await Promise.all([
      new Promise(resolve => setTimeout(() => resolve(1), 3000)),
      new Promise(resolve => setTimeout(() => resolve(2), 2000)),
      new Promise(resolve => setTimeout(() => resolve(3), 1000))
    ]);

    console.log('두번째', res);
  }

  foo1(); // 약 3초 소요
}());
(function () {
  function test(a, b, c) {
    const what = a;
    console.log(arguments);
    console.log(what);

    // Array.prototype.slice를 인수 없이 호출하면 배열의 복사본을 생성한다.
    const arr = Array.prototype.slice.call(arguments);
    console.log(arr);

    return this.name;
  }

  const bind = {
    name: '명욱'
  };

  // call, apply로 bind 객체에 this 바인딩하기
  console.log(test.call(bind, 1, 2, 3));
  console.log(test.apply(bind, [1, 2, 3]));

  // bind는 this로 사용할 객체만 전달한다
  console.log(test.bind(bind)());

  test(5, 6, 7); // [5,6,7] 호출

  const person = {
    name: 'Kim',
    foo(callback) {
      // bind 메서드로 callback 함수 내부의 this 바인딩을 전달
      setTimeout(callback.bind(this), 100);
    }
  };

  person.foo(function () {
    // 함수는 호출되는 시점에서 this가 바인딩 된다.
    // 일반함수로 호출하였기 때문에 여기서의 this는 window를 가리키지만
    // 위의 person 객체에서 callbak 함수를 bind 메서드로 person 객체에 this 바인딩 시켰기 때문에 person 를 가리킬 수 있다
    console.log(`Hi! my name is ${this.name}`);
  });
})();

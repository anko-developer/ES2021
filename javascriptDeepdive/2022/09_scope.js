(function() {
  // 함수도 스코프 체인을 당연히 갖는다 (식별자를 검색하는 규칙)
  function go() {
    console.log('외부');
  }

  function gogo() {
    function go () {
      console.log('내부');
    }

    go();
  }

  gogo();

  // 렉시컬 스코프
  // 함수를 어디서 정의했느닞에 따라 함수의 상위 스코프를 결정한다.
  let x = 1;

  function foo() {
    let x = 10;
    bar();
  }

  function bar() {
    console.log(x);
  }

  foo(); // 1
  bar(); // 1
})();
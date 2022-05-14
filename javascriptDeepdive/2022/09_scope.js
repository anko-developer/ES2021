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
})();
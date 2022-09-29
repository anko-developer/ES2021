(function() {
  // setTimeout 는 테스크큐에 푸시되어 있다가 콜 스택이 비게되면 비로소 콜스택에 푸시되어 실행된다. 
  const foo = () => {
    console.log('foo');
  };

  const bar = () => {
    console.log('bar');
  };

  setTimeout(foo, 0);
  bar();
}());
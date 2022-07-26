// 클로저 문제 -> 스코프, 비동기, var
// 클로저가 문제다 X
// 클로저를 사용해서 해결하는 문제
// for문(반복문)과 비동기를 함께 사용하면 종종 발생

// 문제: var와 for
// 해결법: var 유지 -> 즉시실행함수로 클로저 생성
// 해결법: var -> let으로
function a() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }

  // for (var i = 0; i < 5; i++) {
  //   (function(j) {
  //     setTimeout(() => {
  //       console.log(j);
  //     }, i * 1000);
  //   })(i);
  // }
}

a();
// function a 스코프는 1개고, for문의 스코프는 5개
// a 스코프에서 i는 0 -> 5가 되는거고, for문의 스코프 5개에서 i는 각각 0,1,2,3,4
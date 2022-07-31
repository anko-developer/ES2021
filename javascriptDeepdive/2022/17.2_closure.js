// for문 안에서 var 키워드는 전역변수가 되기때문에
// 즉시실행함수로 선언 후, i 값을 id 매개변수로 가져오고, 그 안에서 retrun 값으로 함수를 선언하여 매개변수(자유변수)를 연결하는 클로저

var funcs = [];

// for (var i = 0; i < 3; i++) {
//   funcs[i] = (function(id) {
//     return function() {
//       return id;
//     }
//   })(i);
// }

// for (var j = 0; j < funcs.length; j++) {
//   console.log(funcs[j]());
// }

// let 으로 블록스코프 해결: 반복 실행될 때마다 for 문 코드 블록의 새로운 렉시컬 환경이 생성된다.
for (let i = 0; i < 3; i++) {
  funcs[i] = function() {
    return i;
  }
}

for (let j = 0; j < funcs.length; j++) {
  console.log(funcs[j]());
}

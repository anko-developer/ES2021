// arrow function!
// 즉시실행함수로도 사용
const person = ((name) => {
  return name;
})('anko');

console.log(person);

// Array.prototype.map 같은 고차 함수에 인수로 전달할 수 있다.
[1, 2, 3].map(v => v * 2); // 2, 4, 6


// Rest 파라미터는 항상 끝에 오도록
// Rest 파라미터는 단 하나만 선언할 수 있다.
function wow(a, b, ...c) {
  return console.log(c);
}
wow(1, 2, 3, 4);

// 매개변수 기본값
// 인수를 전달하지 않은 경우와 undefined를 전달한 경우에만 유효
function sum(a = 0, b = 0) {
  return a + b;
}
sum(1, 2); // 3
sum(1); // 1
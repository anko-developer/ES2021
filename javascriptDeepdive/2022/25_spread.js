(function() {
  //  spread
  const arr = [1, 2, 3, 100];
  console.log(Math.max(...arr));

  // spread와는 반대 개념인 rest 파라미터
  // rest 파라미터는 인수들의 목록을 배열로 전달받기 위해 매개변수 이름 앞에 ... 을 붙인다
  const foo = (a, b, ...restTest) => {
    console.log(a, b, restTest);
  };
  foo(1, 2, 3, 4, 5, 6); // 1 2 [3, 4, 5, 6]


  // 이터러블을 배열로 변환
  function sum() {
    return [...arguments].reduce((pre, cur) => pre + cur , 0);
  }
  console.log(sum(1,2,3)); // 6

  // rest 파라미터로 더 쉽게 풀기 가능
  const sum1 = (...arg) => {
    return arg.reduce((pre, cur) => pre + cur, 0);
  };
  console.log(sum1(1,2,3)); // 6

  
  // spread 프로퍼티
  // 객체 복사(얕은 복사)
  const obj = { x: 1, y: 2 };
  const copy = { ...obj };
  console.log(obj === copy); // false

  const merged = { ...obj, ...{ a: 3, b: 4 } };
  console.log(merged); // {x: 1, y: 2, a: 3, b: 4}
}());
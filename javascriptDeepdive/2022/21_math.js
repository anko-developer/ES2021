(function() {
  const random = Math.floor((Math.random() * 10) + 1);
  console.log(random); // 1 ~ 10


  // pow는 첫 번째 인수를 base로 두 번째 인수를 지수로 거듭제곱한 결과를 반환
  console.log(Math.pow(2, 2)); // 4

  // ES7에서 도입된 지수 연산자를 사용하는게 가독성이 더 좋다
  console.log(2 ** 2); // 4


  // max는 인수로 전달 받은 값 중에 가장 큰 수를 반환한다
  // 인수가 없으면 -Infinity를 반환하게 됨
  console.log(Math.max(1, 5, 2)); // 5

  // Array에서 가장 큰 수를 반환하려면 스프레드 문법을 사용
  console.log(Math.max(...[1, 2, 3, 100])); // 100

  // min은 인수로 전달 받은 값 중에서 가장 작은 수를 반환한다
  // 인수가 없으면 Infinity를 반환하게 됨
  console.log(Math.min(200, 5, 20)); // 5
}());
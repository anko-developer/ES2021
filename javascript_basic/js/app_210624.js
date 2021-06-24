(function () {
  // 재귀 함수
  // 팩토리얼은 1부터 자신까지의 모든 양의 정수의 곱이다.
  const factorial = function foo(n) {
    // 탈출 조건: n이 1 이하일 때 재귀 호출을 멈춘다.
    if (n <= 1) {
      return 1;
    }

    // 재귀 호출
    return n * factorial(n - 1);

    // 함수 이름으로 자기 자신을 재귀 호출할 수도 있다.
    // return n * foo(n - 1);
  };

  console.log(factorial(5)); // 5 * 4 * 3 * 2 * 1 = 120
})();

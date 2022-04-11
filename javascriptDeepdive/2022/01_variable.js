(function () {
  // naming convention - 변수나 함수의 이름에는 카멜 케이스를 사용, 생성자 함수, 클래스의 이름에는 파스칼 케이스를 사용한다.
  // hoisting
  console.log(testName);
  var testName;
  testName = 80;

  console.log(testName);
})();

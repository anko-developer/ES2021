(function() {
  const target = '010-1234-5678';
  const regExp = /\d{3}-\d{3,4}-\d{4}/;
  console.log(regExp.test(target)); // 핸드폰번호 유효 검사
  console.log(target.replace(/\d{4}$/g, '****')); // 마지막 4자리수를 **** 로 변경하기
}());
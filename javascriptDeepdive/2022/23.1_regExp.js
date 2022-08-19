(function() {
  // 자주 사용하는 정규 표현식

  // 특정 단어로 시작하는 검사.
  const url = 'https://example.com';

  // http:// 또는 https://로 시작하는지 검사한다.
  console.log(/^https?:\/\//.test(url)); // true
  console.log(/^(https||http):\/\//.test(url)); // true

  // 특정 단어로 끝나는지 검사.
  const fileName = 'index.html';  
  console.log('fileName', /html$/.test(fileName)); // true

  // 숫자로만 이루어진 문자열인지 검사
  // 처음과 끝이 숫자이고 최소 한 번 이상 반복되는 문자열을 매치
  const target = '12345';
  console.log('숫자만으로 이루어졌나', /^\d+$/.test(target)); // true

  // 하나 이상의 공백으로 시작하는지 검사
  // \s는 (스페이스, 탭)등을 의미한다. \s는 [\t\r\n\v\f]와 같은 의미다.
  const target1 = ' Hi';
  console.log('하나 이상의 공백으로 시작하는지', /^[\s]/.test(target1));

  // 아이디로 사용 가능한지 검사
  // 문자열이 알파벳 대소문자 또는 숫자로 시작하고 끝나며, 4~10자리인지 검사한다
  const target2 = 'abc123';
  console.log('아이디 유효 검사', /^[A-Za-z0-9]{4,10}$/.test(target2));

  // 메일 주소 형식에 맞는지 검사
  const email = 'mycarton@naver.com';
  console.log('메일 주소 형식 검사', /^[A-Za-z0-9]([-_\.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_\.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/.test(email));

  // 핸드폰 번호 형식에 맞는지 검사
  const cellphone = '010-1234-5678';
  console.log('핸드폰 번호 형식 검사', /^\d{3}-\d{3,4}-\d{4}/.test(cellphone));

  // 특수문자 포함 여부검사
  const target3 = 'abc#123';
  console.log('특수문자 포함 검사1', /[^A-Za-z0-9]/ig.test(target3));
  console.log('특수문자 포함 검사2', /\W_/.test(target3));
  console.log('특수문자 포함 검사', target3.replace(/[^A-Za-z0-9]/ig, '')); // abc123  특수문자를 찾아서 지운다.
}());
(function() {
  /**
   * pattern: 정규 표현식 패턴
   * flags: 정규 표현식의 플래그(g, i, m, u, y)
   */

  // const target = 'Is this all there is?';
  // const regExp = /is/ig;
  // console.log(regExp.test(target));

  // const target = 'color colour coloure';
  // const regExp = /colou?r/g;
  // console.log(target.match(regExp)); // coloure는 r로 이어지는 것 까지만해서 colour을 찾고 e는 잘라버린다.

  // A가 한번이상, B가 한번이상 붙는 문자열을 대소문자 상관없이 전역 검색
  // const target = 'A AA B BB Aa Bb';
  // // const regExp = /A+|B+/ig;
  // const regExp = /[AB]+/ig; // [] 대괄호로 묶으면 or로 작용하기 때문에 이렇게도 가능
  // console.log(target.match(regExp));

  // A~Z까지 한번이상 있는 단어 대문자 찾기
  // const target = 'A AA BB ZZ Aa Bb';
  // const regExp = /[A-Z]+/g;
  
  // 대소문자를 구별하지 않고 알파벳을 검색하는 방법은 다음과 같다
  // const target = 'AA BB Aa Bb 12';
  // const regExp = /[A-Za-z]/g;
  
  // const target = 'AA BB 12,345';
  // const regExp = /[0-9]+/g; // 여기서 ,는 찾지 않는다
  // const regExp = /[0-9,]+/g; // 12,345 이렇게 하면 ,까지 붙여서 반환
  // console.log(target.match(regExp));

  // const target = 'AA BB 12,345';
  // \d 는 [0-9]를 의미하니까 0~9 숫자 또는 ','가 한 번 이상 반복되는 문자열을 전역 검색 
  // const regExp = /[\d,]+/g;

  // \D 는 0~9가 아닌 문자(숫자가 아닌 문자) 또는 ','가 한 번 이상 반복되는 문자열을 전역 검색
  // const regExp = /[\D,]+/g;
  // console.log(target.match(regExp)); // ['AA BB ', ',']

  // \w는 알파벳,숫자,언더스코어를 의미한다, 즉 [A-Za-z0-9_]와 같다.
  // const target = 'Aa Bb 12,345 _!@#$%';
  // const regExp = /[\w]+/g;
  // console.log(target.match(regExp)); // ['A', 'B', '12,345', '_'];

  // 반대로 \W는 알파벳,숫자,언더스코어를 제외한 문자열을 검색
  // const regExp = /[\W,]+/;
  // console.log(target.match(regExp)); // [' ', ' ', ',', '!@#$%']; 

  // NOT은 [^0-9] 숫자를 제외한 문자를 의미
  // 따라서 \d와 반대로 동작하는 \D는 [^0-9]와 같고,
  // [A-Za-z0-9_]와 같은 의미의 \w와 반대로 동작하는 \W는 [^A-Za-z0-9_]와 같다.
  // const target = 'AA BB 12 Aa Bb';
  // const regExp = /[^0-9]+/g; // 숫자를 제외한 문자열 전역 검색
  // console.log(target.match(regExp));

  // [] 대괄호 밖의 ^ 는 문자열의 시작을 의미한다.
  // const target = 'https://anko-developer.com';
  // const regExp = /^https+/ig;
  // console.log(regExp.test(target)); // true

  // $ 는 문자열의 마지막을 의미한다.
  const target = 'https://anko-developer.com';
  const regExp = /com$/g;
  console.log(regExp.test(target)); // true
}());
(function() {
  /**
   * Array
   * 
   * Array.from
   * 
   * 원본 배열을 직접 변경하는 메서드 리스트
   * Array.prototype.fill(채울 요소, start index, end index)
   * Array.prototype.sort()
   * Array.prototype.splice(start index, delete count, 제거한 자리에 들어갈 새로운 요소 값)
   * 
   * 
   * 새로운 배열을 반환하는 메서드 리스트
   * Array.prototype.concat
   * Array.prototype.slice(start index, end index)
   * Array.prototype.map(배열의 요소값, 인덱스, this)
   * Array.prototype.filter(배열의 요소값, 인덱스, this)
   * Array.prototype.reduce(초기 요소값, 배열 요소값, 인덱스, this)
   */

  const test = [1,2,3,4,5];
  const newArray = test.reduce((acc, cur, i, { length }) => {
    return i === length - 1 ? (acc + cur) / length : acc + cur;
  }, 0);
  console.log(newArray);
  
  /**
   * String.prototype
   */

  const str = 'Hello world';
  console.log(str.search(/o/g)); // 정규식으로 찾은 문자열의 인덱스 4를 반환
  console.log(str.includes('w')); // true

  console.log(str.startsWith('He')); // true 해당 문자열로 시작하는지 그 결과를 true/false 로 반환 함
  console.log(str.startsWith('test')); // false
  console.log(str.startsWith(' ', 5)); // true 검색을 시작할 인덱스를 인수 값으로 전달 가능

  console.log(str.endsWith('ld')); // true 해당 문자열로 끝나는지 그 결과를 true/false 로 반환 함 
  console.log(str.endsWith('lo', 5)); // true 처음부터 5자리까지(Hello)가 'lo'로 끝나는지 확인

  console.log(str.charAt(6)); // 'w' 해당 문자열의 인덱스 값에 있는 문자열을 반환

  console.log(str.substring(3, 7)); // 'lo w' start index 부터 end index 전까지의 문자열을 반환, end index는 생략하면 마지막 index까지 반환 함

  console.log(str.substring(0, str.indexOf('r'))); // 'Hello wo' 이런 식으로 substring와 indexOf를 조합해서 사용 가능

  // substring와 결과는 같지만 음수인 인수를 전달할 수 있다는 게 다르다, -5를 넣으면 뒤에사 5자리를 잘라내어 반환하게 됨
  console.log(str.slice(5)); // ' world' 
  console.log(str.slice(1, 5)); // 'ello'
  console.log(str.slice(-5)); // 'world'

  console.log(str.toUpperCase());
  console.log(str.toLowerCase);

  const str1 = '   foo   ';
  console.log(str1.trim()); // 'foo' 앞뒤 공백 자르기
  console.log(str1.trimStart()); // 'foo   ' 앞 공백만 자르기
  console.log(str1.trimEnd()); // '   foo' 뒤 공백만 자르기
  console.log(str1.replace(/\s/g, '')); // 'foo' 정규식으로 공백 없애기

  console.log(str.repeat(2)); // 'Hello worldHello world' 문자열 값 반복시키기, 인수를 빈값으로 놓으면 0이 들어가고 '' 을 반환 함

  console.log(str.replace('Hello', 'Kim')); // 'Kim world' 첫 번째 인수로 전달 받은 문자열 혹은 정규식을 검사해서 두 번째 인수의 문자열로 치환
  console.log(str.replace(/Hello/g, 'Kim')); // 'Kim world'
  console.log(str.replace('world', '<strong>$&</strong>')); // 'Hello <strong>world</strong>' 여기서 $&은 검색된 문자열을 의미한다

  console.log(str.split('')); // ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
  console.log(str.split(/\s/g)); // ['Hello', 'world']
}());
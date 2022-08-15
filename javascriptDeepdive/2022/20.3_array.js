(function() {
  // Array.prototype.filter
  // 반환 값이 true 가 되는 것만 새로운 배열로 반환한다.
  const arr = [1, 2, 3, '가'];
  const result = arr.filter((item) => item === '가');
  console.log(result); // '가'

  
  const arr1 = [1, 2, 3, 3];
  // Array.prototype.recude로 평균 값 구하기
  const result1 = arr1.reduce((acc, cur, index, { length }) => {
    return index === length - 1 ? (acc + cur) / length : acc + cur;
  }, 0);
  console.log(result1); // 9 / 3 = 3

  // Array.prototype.recude로 최대 값 구하기
  const result2 = arr1.reduce((acc, cur) => (acc > cur ? acc : cur), 0);
  console.log(result2); // 3

  // 최대 값은 Math.max 로 구하는게 더 직관적
  const max = Math.max(...arr1);
  console.log('max', max); // 3
  
  // 요소의 중복 횟수 구하기
  // 초기 값을 { } 빈 객체로 시작
  const arr2 = ['orange', 'banana', 'apple', 'banana'];
  const result3 = arr2.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  console.log(result3);

  // 중복 값 빼고 반환하기
  const result4 = arr1.filter((item, index, arr) => {
    return arr.indexOf(item) === index; 
  });
  console.log(result4);

  // 중복되지 않는 유일한 값들의 집한인 Set를 사용하면 쉽게 가능
  const result5 = [...new Set(arr1)];
  console.log(result5);

  // some는 단 한번이라도 반환값이 참이면 ture를 반환하고 끝남
  console.log([5, 10 , 15].some(item => item > 10)); // true

  // every 는 모든 요소에 대한 반환값이 참이여야 ture, 하나라도 거짓이면 false를 반환
  console.log([5, 10, 15].some(item => item > 4)); // true

  // flatMap는 map과 flat를 합쳐놓음
  // 아래는 문자열을 split로 배열로 만들어 줬고, 배열안에 두개의 배열을 flat로 평탄화 작업
  console.log(['hello', 'hi'].map(item => item.split('')).flat());

  console.log(['hello', 'hi'].flatMap(item => item.split('')));
}());
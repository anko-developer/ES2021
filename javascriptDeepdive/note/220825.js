(function() {
  /**
   * Array
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
   */
  
  // from(유사배열객체/이터러블, 콜백함수)
  const test = Array.from({length: 2, 0: 'a', 1: 'b'}, i => i + 'test');
  const test1 = Array.from('HELLO', i => i + 'test');
  console.log(test); // ['atest', 'btest']
  console.log(test1); // ['Htest', 'Etest', 'Ltest', 'Ltest', 'Otest']

  // includes(찾을 요소, start index)
  // indecOf 메서드는 반환값이 -1인지 확인해야하고 NaN도 찾을 수 없기 때문에 간편하게 includes를 사용
  const includeTest = [1, 2, 3, NaN];
  console.log(includeTest.includes(NaN, 2)); // true

  // flat(평탄화할 깊이를 인수로 전달)
  // 인수로 전달한 깊이만큼 재귀적으로 배열을 평탄화
  console.log([1, [2, 3]].flat()); // [1, 2, 3]
  console.log([1, [2, [3, [4]]]].flat(2)); // [1, 2, 3, Array(1)]
  console.log([1, [2, [3, [4]]]].flat(Infinity)); // [1, 2, 3, 4]

  // sort
  // 비교 함수의 반환값이 0보다 작으면 비교 함수의 첫 번째 인수를 우선 정렬하고, 0이면 정렬하지 않으며, 0보다 크면 두 번째 인수를 정렬
  const sortString = ['Bananana', 'Apple', 'Good'];
  sortString.sort()
  console.log(sortString); // ['Apple', 'Bananana', 'Good']
  const sortNumber = [1, 100, 20, 10];
  sortNumber.sort();
  console.log(sortNumber); // [1, 10, 100, 20]

  sortNumber.sort((a, b) => a - b);
  console.log(sortNumber); // [1, 10, 20, 100]
  sortNumber.sort((a, b) => b - a);
  console.log(sortNumber); // [100, 20, 10, 1]

  const sortObj = [
    {
      id: 4,
      content: 'JavaScript'
    },
    {
      id: 1,
      content: 'HTML'
    },
    {
      id: 2,
      content: 'CSS'
    },
  ];
  
  function compare(key) {
    return (a, b) => (a[key] > b[key] ? 1: (a[key] < b[key] ? -1 : 0));
  }
  sortObj.sort(compare('id'));
  console.log(sortObj); // id 값 기준으로 객체가 정렬 됨

  // forEach 
  // 항상 반환 값은 undefined
  const foreachTest = ['나다', '너다', , '내 앞에 희소배열값이다'];
  foreachTest.forEach((item) => console.log(item)); // '나다', '너다', '내 앞에 희소배열값이다'     희소 배열은 순회 대상에서 제외!

  // map
  // 콜백함수의 반환값들로 구성된 새로운 배열을 반환
  const mapTest = [2, 4, 6, 8, 10];
  const mapResult = mapTest.map((item) => item + 1);
  console.log(mapResult); // [3, 5, 7, 9, 11]
}());
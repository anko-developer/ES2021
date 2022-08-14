(function() {
  const points = [40, 100, 1, 0, 5, 2, 25, 10];
  points.sort();
  console.log(points); // [1, 10, 100, 2, 25, 40, 5]

  // 함수의 반환값이 0보다 작으면 첫 번째 인수를 정렬, 0이면 정렬안함, 0보다 크면 두 번째 인수를 정렬
  // 숫자 오름차순 정렬
  points.sort((a, b) => a - b);
  console.log(points); // [0, 1, 2, 5, 10, 25, 40, 100]
  console.log(points[0], points[points.length - 1]); // 0, 100  최소값, 최대값 구하기

  // 숫자 내림차순 정렬
  points.sort((a, b) => b - a);
  console.log(points); // [100, 40, 25, 10, 5, 2, 1, 0]


  const todos = [
    {id: 4, content: 'a'},
    {id: 1, content: 'c'},
    {id: 5, content: 'b'},
  ];

  function compare(key) {
    return (a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
  }

  // id를 기준으로 오름차순 정렬
  todos.sort(compare('id'));
  console.log(todos);

  // content를 기준으로 오름차순 정렬
  todos.sort(compare('content'));
  console.log(todos);

  
  // forEach 메서즈는 (요소값, 인덱스, this)의 인수를 전달한다
  const arr1 = [1, 2, 3];
  arr1.forEach((item, index, arr) => {
    console.log(item, index, arr);
  });

  // forEach는 원본배열을 변경하지는 않지만 콜백 함수를 통해 원본 배열을 변경할 수는 있다.
  arr1.forEach((item, index, arr) => {
    arr[index] = item ** 2;
  });
  console.log(arr1); // [1, 4, 9]
}());

(function() {
  const arr = [1, 100, 50, 20];

  // 모든 요소를 순회하면서 콜백함수를 반복적으로 호출하고, 새로운 배열을 반환 (원본 배열 변경 X)
  const result = arr.map((item, index) => {
    return {
      id: index,
      content: item
    }
  });
  console.log(result);
}());
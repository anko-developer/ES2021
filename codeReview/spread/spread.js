(function() {
  // Spread Operator
  // 1. spread는 얕은 복사가 된다.
  const arr1 = ['하나', '둘', '셋', ['넷', '다섯', '여섯']];
  const arr2 = [...arr1];
  arr2[0] = '수정한다';
  arr2[3][0] = '수정한다';
  
  console.log(arr2); // ['수정한다', '둘', '셋', ['넷', '다섯', '수정한다']];
  console.log(arr1); // ['하나', '둘', '셋', ['넷', '다섯', '수정한다']];


  // 2. array.prototype.filter 를 쓰지 않고도 Set 객체로 중복값 제거
  const arr3 = [1, 2, 3, 4, 5, 6, 7, 7, 7, 5, 3, 2, 1];
  // arr3.filter((item) => {});
  console.log(...new Set(arr3)); // 1 2 3 4 5 6 7


  // 3. 배열 연결
  const arr4 = [...arr1, ...arr3];
  console.log(arr4); // ['하나', '둘', '셋', ['넷', '다섯', '수정한다'], 1, 2, 3, 4, 5, 6, 7, 7, 7, 5, 3, 2, 1];


  // 4. NodeList를 Array로 바꿔서 고차함수를 사용 가능하도록 변경
  const domItem = document.querySelectorAll('.spread__item');
  console.dir(domItem); // [[Prototype]]: NodeList
  // domItem.filter(item => console.log(item)); // TypeError: domItem.filter is not a function
  
  const arr5 = [...domItem];
  console.dir(arr5); // [[Prototype]]: Array 
  arr5.filter(item => console.log(item)); // 에러 없이 array prototype method 사용 가능
}());
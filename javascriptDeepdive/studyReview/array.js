(function() {
  console.log(Array.from({ length: 3 }, (_, n) => n));

  const arr = ['apple', 'orange', 'banana'];
  if (!arr.includes('wow')) {
    arr.push('wow');
    console.log(arr);
  }

  arr.splice(1, 1, 'change'); // 원본 배열을 직접 변경
  console.log(arr);

  arr.splice(1, 0, 'add'); // 제거할 요소의 갯수를 0으로 지정하면 아무런 요소도 삭제 안하고 그자리에 새로운 요소 삽입 가능
  console.log(arr);

  const arrSlice = arr.slice(0, 2); // 복사할 start index, end index(이전) 
  console.log(arrSlice); // ['apple', 'add']

  const arrSlice1 = arr.slice(1); // end index 생략할 경우 start index 부터 끝까지 복사
  const arrSlice2 = arr.slice(-2); // 첫 번째 인수가 음수인 경우 배열의 끝에서부터 요소의 갯수만큼 복사, -2는 끝에서 2개 복사
  console.log(arrSlice2); // ['banana', 'wow']

  const arrSlice3 = arr.slice(); // 인수를 모두 생략하면  배열 전체를 복사한다.
  console.log(arr === arrSlice3); // false 얕은 복사
}());
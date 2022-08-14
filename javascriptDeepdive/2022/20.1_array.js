(function() {
  const arr1 = [1, 2];
  const arr2 = [3, 4];

  // concat 메서드는 인수로 전달된 값들을 원본 배열의 마지막 요소로 추가한 새로운 배열을 반환한다.
  let result = arr1.concat(arr2);
  console.log(result); // [1,2,3,4]

  // result = arr1.concat(arr2, 100);
  result = [...arr1, ...arr2, 100]; // concat 메서드는 ES6의 스프레드 문법으로 대체할 수 있다.
  console.log(result); // [1,2,3,4,100]

  console.log(arr1); // [1,2]  원본 배열은 변경되지 않는다.


  // splice 는 원본 배열을 직접 변경한다
  // Array.splice(start, deleteCount, items);
  const arr3 = [1, 2, 3, 4];
  arr3.splice(1, 2, 20, 30);
  console.log('arr3', arr3); // [1,20,30,4]

  arr3.splice(1, 0, '여기');
  console.log('arr3', arr3); // [1,'여기', 20, 30, 4]  두 번째 인수를 0으로 지정하면 아무런 요소를 제거하지 않고 새로운 요소를 삽입(옵션)

  const arr3Result = arr3.splice(1, 2);
  console.log('arr3Result', arr3Result); // ['여기', 20]  제거한 요소를 배열로 반환


  const arr4 = [1, 2, 3, 4, 5, 6];
  function remove(num) {
    const index = arr4.indexOf(num);
    arr4.splice(index, 1);
    return arr4;
  }
  console.log(remove(3)); // [1,2,4,5,6]  배열에서 특정 요소를 제거하려면 indexOf 메서드를 통해 특정 요소의 인덱스를 취독한 다음 splice 메서드를 사용

  // splice 와는 다르게 원본 배열은 변경되지 않는다.
   // slice(startIndex, endIndex) start index 부터 시작하여 end index 전까지 값을 복사한다.
   // 인수값이 음수면 배열의 끝에서의 인덱스를 나타낸다.
  const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log('arr5' , arr5.slice(2, -2)); // [3,4,5,6,7]
  console.log('arr5' , arr5.slice(-5, 7)); // [5,6,7]
  console.log('arr5' , arr5.slice(5)); // [6,7,8,9]  두 번째 인수를 생략하면 첫 번째 인수로 전달받은 인덱스부터 모든 요소를 복사
  console.log('arr5' , arr5.slice()); // 모든 인수를 생략하면 원본 배열의 복사본을 생성하여 반환

  const copy = arr5.slice();
  console.log(copy === arr5); // false  생성된 복사는 얕은 복사이기 때문에 false
  console.log(copy[0] === arr5[0]); // true  배열 요소의 참조값이 같다. 즉, 얕은 복사되었다. 


  // ES6 fill 메서드는 인수로 전달받은 값을 배열의 처음부터 끝까지 요소로 채운다, 원본 배열을 직접 변경함
  // Array.prototype.fill(채울 요소, 채우기 시작할 인덱스, 채우기를 멈출 인덱스)
  arr5.fill(0, 1, 4);
  console.log(arr5); // [1,0,0,0,5,6,7,8,9]

  
  // includes 는 indexOf 대신 사용한다
  // Array.prototype.includes(검색할 요소, 검색을 시작할 인덱스);
  // 두 번째 인수는 생략가능, 기본 값이 0으로 들어간다
  // 두 번째 인수를 음수로 전달하면 length 프로퍼티 값과 음수 이덱스를 합산하여(length + index)를 검색
  const arr6 = [1, 2, 3, 4, 5];
  arr6.includes(2); // true


  // Array.prototype.flat
  // flat 메서드는 인수로 전달한 깊이만큼 재귀적으로 배열을 평탄화 한다.
  // 중첩 배열을 평탄화할 깊이를 인수로 전달할 수 있다. 인수를 생략할 경우 기본값은 1
  console.log([1, [2, 3]].flat()); // [1,2,3]
  console.log([1, [2, [3]]].flat()); // [1,2,[3]]

  console.log([1, [2, [3, [4, 5]]]].flat(Infinity)); // [1,2,3,4,5]  중첩 배열을 평탄화하기 위한 깊이 값을 Infinity로 지정하여 중첩 배열 모두를 평턴화한다
}());
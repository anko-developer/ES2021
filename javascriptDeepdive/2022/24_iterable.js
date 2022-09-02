(function() {
  const array = [1,2,3];

  // 이터러블인 배열은 for of 문으로 순회 가능
  for (const item of array) {
    console.log(item);
  }

  // 이터러블인 배열은 스프레드 문법의 대상으로 사용 가능
  console.log([...array]);

  // 이터러블인 배열은 배열 디스트럭처링 할당의 대상으로 사용 가능
  const [a, ...rest] = array;
  console.log(a, rest); // 1  [2, 3]

  // next 메서드는 이터러블의 각 요소를 순회하기 위한 포인터 역할을 한다
  const iterator = array[Symbol.iterator]();
  console.log(iterator.next()); // {value: 1, done: false}
  console.log(iterator.next()); // {value: 2, done: false}
  console.log(iterator.next()); // {value: 3, done: false}


  // const fibonacci = {
  //   [Symbol.iterator]() {
  //     let [pre, cur] = [0, 1];
  //     const max = 10; // 수열의 최대 값

  //     return {
  //       next() {
  //         [pre, cur] = [cur, pre + cur];
          
  //         return { value: cur, done: cur >= max };
  //       }
  //     }
  //   }
  // };

  // 이터러블이면서 이터레이터인 객체를 생성하여 반환하는 함수.
  const fibonacci = function (max) {
    let [pre, cur] = [0, 1];

    return {
      [Symbol.iterator]() { return this; },
      next() {
        [pre, cur] = [cur, pre + cur];
        
        return { value: cur, done: cur >= max };
      }
    }
  };

  for (const num of fibonacci(10)) {
    console.log(num); // 1 2 3 5 8
  }

  const arr = [...fibonacci(10)]; 
  console.log(arr); // [1,2,3,5,8]

  const [first, second, ...test] = fibonacci(10); 
  console.log(first, second, test); // 1 2 [3,5,8]
}());
(function() {
  // 두 번째 인수로 전달한 콜백 ㅎ마수의 반환값으로 구성된 배열을 반환한다
  const test = Array.from({ length: 3 }, (a, b) => b); // a는 요소값, b는 인덱스를
  console.log(test);

  delete test[1];
  console.log(test); // [1, empty, 3]  희소배열이 되므로 delete는 사용하지 않는 것이 좋음.


  // Array.prototype.splice(삭제를 시작할 인덱스, 삭제할 요소 수);
  const arr = [1, 2, 3];
  arr.splice(1, 1);
  console.log(arr); // [1, 3];

  // length 프로퍼티가 자동으로 갱신
  console.log(arr.length); // 2

  
  const foods = ['banana'];
  // if (foods.indexOf('orange') === -1) {
  //   foods.push('orange');
  // }
  // console.log('foods', foods);
  
  // indexOf 대신 es7에서 도입된 includes 메서드를 사용하면 가독성이 더 좋다
  if (!foods.includes('orange')) {
    foods.push('orange');
  }
  console.log('foods', foods);


  // 생성자함수로 push, pop 만들기
  const Stack = (function() {
    function Stack(array = []) {
      if (!Array.isArray(array)) {
        throw new TypeError(`${array} is not an array`);
      }

      this.array = array;
    }

    Stack.prototype = {
      constructor: Stack,
      push(value) {
        return this.array.push(value);
      },
      pop(value) {
        return this.array.pop(value);
      },
      copy() {
        return [...this.array];
      }
    }

    return Stack;
  }());

  const arrayTest = new Stack([1, 2]);
  console.log(arrayTest.copy()); // [1,2]
  console.log(arrayTest.push(3));
  console.log(arrayTest.copy()); // [1,2,3]
  
}());
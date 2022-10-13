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

  const arr1 = [40, 100, 1, 5, 2];
  
  console.log(arr1.sort((a, b) => a - b));
  console.log(arr1.sort((a, b) => b - a));

  const todos = [
    { id: 4, content: 'test4' },
    { id: 1, content: 'test1' },
    { id: 2, content: 'test2' },
  ];
  
  function compare(key) { 
    return (a, b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0));
  }

  todos.sort(compare('id'));
  console.log(todos);

  class Users {
    constructor() {
      this.users = [
        { id: 1, name: 'Lee' },
        { id: 2, name: 'Kim' },
      ];
    }

    findById(id) {
      return this.users.filter(user => user.id === id);
    }

    remove(id) {
      this.users = this.users.filter(user => user.id !== id);
    }
  }

  const users = new Users();
  let user = users.findById(1);
  console.log(user); // 1

  console.log('users1', users);
  users.remove(1);

  console.log('users2', users);
  user = users.findById(1);
  console.log('users3', users);
  console.log(user);


  const reduceArray = [1, 2, 3, 4].reduce((acc, cur, i, arr) => acc + cur, 0);
  console.log(reduceArray);

  const valueArray = [1, 2, 1, 4, 5, 2, 4];
  const resultArray = valueArray.reduce((acc, cur, i, arr) => {
    if (arr.indexOf(cur) === i) {
      acc.push(cur);
    }
    return acc;
  }, []);
  console.log(resultArray);

  // 중복요소 제거는 filter 메서드가 훨씬 직관적
  const reduceArray1 = valueArray.filter((item, i, arr) => arr.indexOf(item) === i);
  console.log(reduceArray1);
}());
(function() {
  const arr = [1, 2, 3];
  const [result1, result2, result3] = arr;
  console.log(result1, result2, result3); // 1 2 3

  // 배열 디스트럭처링 할당을 위한 변수에 기본값을 설정할 수 있다.
  const [a, b, c = 3] = [1, 2];
  console.log(a,b,c); // 1 2 3

  // 기본값보다 할당된 값이 우선한다.
  const [e, f = 10, g = 3] = [5, 6, 7];
  console.log(e, f, g); // 5 6 7


  // URL을 파싱하여 protocol, host, path 프로퍼티를 갖는 객체를 생성해 반환한다.
  function parseURL(url = '') {
    const parsedURL = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
    console.log(parsedURL);
    /*
    [
      'https://developer.mozilla.org/ko/docs/Web/CSS/cursor', 
      'https', 
      'developer.mozilla.org', 
      'ko/docs/Web/CSS/cursor', 
      index: 0, 
      input: 'https://developer.mozilla.org/ko/docs/Web/CSS/cursor', 
      groups: undefined
    ]
    */

    if (!parsedURL) return {};

    // 배열 디스트럭처링 할당을 사용하여 이터러블에서 필요한 요소만 추출한다
    const [, protocol, host, path] = parsedURL; // 인덱스 값으로 순서대로 가져오기 때문에 0번 인덱스는 건너띄기위해 , 하나 넣어줬음
    return { protocol, host, path };
  }

  const parsedURL = parseURL('https://developer.mozilla.org/ko/docs/Web/CSS/cursor');
  console.log(parsedURL);
  /*
    {
      protocol: 'https', 
      host: 'developer.mozilla.org', 
      path: 'ko/docs/Web/CSS/cursor'
    }
  */

  // 배열 디스트럭처링 할당을 위한 변수에 Rest 파라미터와 유사하게 Rest 요소를 사용 가능
  // Rest 파라미터와 마찬가지로 반드시 마지막에 위치해야 한다.
  const [testArray1, ...testArray2] = [1, 2, 3, 4, 5];
  console.log(testArray1, testArray2); // 1  [2, 3, 4, 5]


  // 객체 디스트럭처링
  const user = { firstName: 'kim', lastName: 'wook' };
  const { firstName, lastName } = user;
  console.log(firstName, lastName);

  // 객체 디스트럭처링 할당을 위한 변수에 기본값을 설정할 수 있다.
  const { myName = 'anko', yourName } = { yourName: 'wook' };
  console.log(myName, yourName); // anko wook

  // 필요한 프로퍼티 값만 추출하여 변수에 할당하기 유용하다.
  const str = 'HELLO';
  const { length } = str;
  console.log(length); // 5   유사배열객체인 문자열의 length 프로퍼티 할당

  const todo = { id: 1, text: '테스트' };
  const { id: idNum } = todo;
  console.log(idNum); // 1

  function printTodo({ content, completed }) {
    console.log(`할일 ${content}는 ${completed ? '완료' : '미완료'}`);
  }
  printTodo({ id: 1, content: 'TypeScript', completed: true });

  // 중첩 객체의 경우 이렇게 사용!
  const info = {
    name: 'kim',
    address: {
      zipCode: '12345',
      city: 'Seoul'
    }
  };

  const { address: { city } } = info;
  console.log(city); // 'Seoul'
}());
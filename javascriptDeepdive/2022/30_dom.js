(function() {
  const $input = document.getElementById('inputBox');
  const { attributes } = document.getElementById('inputBox');
  console.log(attributes); // NamedNodeMap {0: type, 1: id, type: type, id: id, length: 2}

  // attribute 값 취득하기, 이 방법은 매우 불편하다
  console.log(attributes.id.value); //inputBox
  console.log(attributes.type.value); //text

  // getAttribute, setAttribute로 취득도하고 변경도 쉽게 할 수 있다.
  const inputValue = $input.getAttribute('type');
  console.log(inputValue); //text

  // setAttribute로 값을 변경
  $input.setAttribute('type', 'password');

  // hasAttribute로 어트리뷰트가 존재하는지 확인 후
  // removeAttribute 어트리뷰트를 삭제
  if ($input.hasAttribute('class')) {
    $input.removeAttribute('class');
  }

  // 사용자가 input 요소에 값을 입력할 때마다 최신 상태 값을 취득한다.
  // value 프로퍼티 값은 사용자의 입력에 의해 동적으로 변경된다.
  $input.oninput = () => {
    console.log('value 프로퍼티 값', $input.value);
  };

  // getAttribute 메서드로 취득한 HTML 어트리뷰트 값, 즉 초기 상태 값은 변하지 않고 유지된다.
  console.log('어트리뷰트 값', $input.getAttribute('value'));


  const users = [...document.querySelector('.users').children];
  const user = users.find(user => user.dataset.userId === '6900'); // data-user-id 값 취득
  console.log(user.dataset.role); // data-role 값 취득! user
  user.dataset.role = 'test'; // data-role 값 변경 
}());
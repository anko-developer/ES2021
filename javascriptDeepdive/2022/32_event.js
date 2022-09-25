(function() {
  const $input = document.querySelector('.textInput');
  const $msg = document.querySelector('.msg');

  // input 요소에 한글을 입력하고 엔터 키를 누르면 keyup 이벤트 핸들러가 두 번 호출되는 오류가 발생
  // 이 문제를 회피하려면 keyup 대신 keydown 이벤트를 캐치한다.
  $input.addEventListener('keydown', function(e) {
    if (e.key !== 'Enter') return;
    console.log(e.key);
    $msg.textContent = e.target.value;
    e.target.value = '';
  });

  const $fruits = document.querySelector('#fruits');
  const $message = document.querySelector('.message');

  function activate({ target }) {
    // 이벤트를 발생시킨 요소(target)가 #fruits 의 자식 요소가 아니라면 무시한다
    if (!target.matches('#fruits > li')) return;

    [...$fruits.children].forEach($fruit => {
      $fruit.classList.toggle('active', $fruit === target); // 클릭한 target은 toggle 값을 true 로 해서 넣어줌.
      $message.textContent = target.id;
    }); 
  }

  $fruits.addEventListener('click', activate);
}());
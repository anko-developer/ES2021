(function() {
  // NodeList, HTMLCollection은 유사 배열이면서 이터러블이기 때문에
  // 스프레드 문법으로 배열로 바꿀 수 있다.   
  // Array에 유용한 고차함수가 많기 때문에 배열로 변환해서 사용하면 좋다.
  const $li = document.querySelectorAll('.item');
  [...$li].forEach((item) => {
    console.log(item);
  });

  const testSibling = document.querySelector('.test'); // <li class="item test">테스트 버튼3</li>
  console.log(testSibling.nextElementSibling); // <li class="item">테스트 버튼4</li>  모든 형제를 찾지는 않고 next 요소 한개만 찾음
}());
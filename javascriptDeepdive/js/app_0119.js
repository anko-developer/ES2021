(function() {
  // HTML 요소 순회하는 방법

  // const listItem = document.querySelectorAll('.study__item'); - NodeList prototype 이라서 forEach 못씀
  const listItem = document.getElementsByClassName('study__item'); 
  const listItem1 = document.querySelectorAll('.study__item');

  // 방법1 - Array.prototype에 접근하여 call로 바인딩 시켜주기
  Array.prototype.forEach.call(listItem, (elem, index) => {
    console.log(elem, index);
  });

  // 방법2 - 스프레드 사용
  [...listItem].forEach((elem, index) => {
    console.log(elem, index);
  });

  // 방법3 - Array.from 메서드를 사용하면 NodeList나 HTMLCollection같은 유사배열객체를 순수 배열로 반환 받을 수 있다
  Array.from(listItem1).forEach((elem, index) => {
    console.log(index);
  });
})();
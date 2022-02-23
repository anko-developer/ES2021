window.addEventListener('DOMContentLoaded', (event) => {
  const LIST = document.getElementsByClassName('study__item');
  const LIST1 = document.querySelectorAll('.study__item');

  // getElementsByClassName로 사용
  // Array.prototype.forEach.call(LIST, (el, i) => {
  //   el.addEventListener('click', () => {
  //     console.log('test0', i);
  //   });
  // });

  // [...LIST].forEach((el, i) => {
  //   el.addEventListener('click', () => {
  //     console.log('test0', i);
  //   });
  //   console.log(el, i);
  // });


  // querySelectorAll로 사용
  // Array.prototype.forEach.call(LIST1, (el, i) => {
  //   el.addEventListener('click', () => {
  //     console.log('test0', i);
  //   });
  // });

  // [...LIST1].forEach((el, i) => {
  //   el.addEventListener('click', () => {
  //     console.log('test0', i);
  //   });
  //   console.log(el, i);
  // });
});
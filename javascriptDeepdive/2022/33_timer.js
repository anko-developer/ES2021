import _ from 'lodash';

(function() {
  // lodash의 debounce 함수를 사용하는 것을 권장 
  const $debounceInput = document.querySelector('.debounceInput');
  const $debounceInputText = document.querySelector('.debounceInputText');
  
  $debounceInput.oninput = _.debounce((e) => {
    $debounceInputText.textContent = e.target.value;
  }, 300);


  // lodash 깊은복사
  const test1 = {
    name: 'Kim',
    age: '35',
  };

  const test2 = _.cloneDeep(test1);
  console.log(test2);
  console.log(test1 === test2); // fase
}());

// (function() {
//   const $debounceInput = document.querySelector('.debounceInput');
//   const $debounceInputText = document.querySelector('.debounceInputText');

//   const debounce = (callback, delay) => {
//     let timerId;
//     // debounce 함수는 timerId를 기억하는 클로저를 반환한다.

//     return event => {
//       // delay가 경과하기 전에 이벤트가 발생하면 이전 타이머를 취소하고 새로운 타이머를 재설정한다.
//       // 따라서 delay보다 짧은 간격으로 이벤트가 발생하면 callback은 호출되지 않는다.
//       if (timerId) {
//         clearTimeout(timerId)
//       }

//       timerId = setTimeout(callback, delay, event);
//     };
//   };
  
//   $debounceInput.oninput = debounce(e => {
//     $debounceInputText.textContent = e.target.value;
//   }, 300);
// }());
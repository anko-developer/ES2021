(function () {
  'use strict';

  // for example
  for (let i = 1; i <= 6; i++) {
    for (let j = 1; j < 6; j++) {
      if (i + j === 6) {
        console.log(`${i} + ${j}`);
      }
    }
  }

  // 중첩된 for 문에서 break 를 사용하면 내부 for 문을 탈출하여 외부 for 문에 진입할 수 있다.
  // 외부 for 문을 탈출하려면 레이블 문을 사용하면 된다.
  // 레이블 문을 사용하면 유용하긴 하지만 가독성이 안좋아지고, 흐름이 복잡해져서 오류 발생 확률이 높아진다.
  test: for (let i = 1; i <= 6; i++) {
    console.log('test' + i);
    for (let j = 1; j < 6; j++) {
      if (i + j === 6) {
        console.log(`${i} + ${j}`);
        // break; 이렇게만 하면 내부 for 문을 탈출하여 외부 for 문에 진입한다.
        break test; // 이렇게 하면 외부 for 문을 찰출할 수 있다.
      }
    }
  }
})();

(function () {
  'use strict';

  // template literal
  const hello = '안녕';
  const template = `<ul>
    <li><a href="#">Home</a></li>
  </ul>`;

  console.log(`${hello} 입니다.`);
  console.log(template);

  // symbol type
  const key = Symbol('key');
  console.log(typeof key); // symbol

  const obj = {};

  // 이름이 충돌할 위험이 없는 유일무이한 값인 심벌을 프로퍼티 키로 사용한다.
  obj[key] = '테스트';
  console.log(obj[key]); // 테스트
})();

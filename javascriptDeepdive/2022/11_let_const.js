const { log } = require("handlebars");

(function () {
  // let의 블록 레벨 스코프
  console.log(foo); // error - 변수 호이스팅이 발생하지 않는 것처럼 동작한다. let 키워드로 선언한 변수는 선언과 초기화 단계가 분리되어 진행 됨
  // 만약 초기화 단계가 실행되기 이전에 변수에 접근하려고 하면 참조 에러가 발생한다. 
  let foo = 1 // 전역 변수

  {
    let foo = 2; // 지역 변수
    let bar = 3; // 지역 변수
  }

  console.log(foo); // 1
  // console.log(bar); // error - bar 는 지역 변수이기 때문에 전역에서는 참조할 수 없다.


  console.log('test', test); // error

  let test = 11; // 초기화 단계
  console.log('test', test); // 11


  // 프로그램 전체에서 고정된 값으로 사용하거나, 나중에 고정된 값이 변경되는 시점이 온다면 해당 값만 변경하면 되기 때문에 유지보수성이 대폭 향상된다.
  // const 키워드로 선언된 변수에 원시 값을 할당한 경우 원시 값은 변경할 수 없는 값이고 
  // const 키워드에 의해 재할당이 금지되므로 할당된 값을 변경할 수 있는 방법은 없다.

  // 세율을 의미하는 0.1은 변경할 수 없는 상수로 사용될 값
  // 변수 이름을 대문자로 선언해 상수임을 명확히 나타낸다.
  const TAX_RATE = 0.1;

  // 세전 가격
  let preTaxPrice = 100;

  // 세후 가격
  let afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE);
  console.log(afterTaxPrice); // 110


  // const 키워드로 선언된 변수에 객체를 할당한 경우 값을 변경할 수 있다.
  // 변경 불가능한 값인 원시 값은 재할당 없이 변경할 수 있는 방법이 없지만 변경 가능한 값인 객체는 재할당 없이도 직접 변경이 가능하기 때문이다.

  // const 키워드는 재할당을 금지할 뿐 "불변"을 의미하지는 않는다.
  const person = {
    name: 'Kim'
  };

  person.name = 'anko';
  console.log(person); // {name: 'anko}
})();
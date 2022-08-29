(function() {
  // 전역 심벌 레지스트리에 저장 후 관리하는 Symbol.for
  // 일반 Symbo('kim'); 같은 함수는 전역 심벌 레지스트리에 저장되지 않는다
  const mySymbol = Symbol.for('kim');
  const mySymbol1 = Symbol.for('kim');
  console.log(mySymbol === mySymbol1); // true
  
  // 변경/중복될 가능성이 있는 무의미한 상수 대신 중복될 가능성이 없는 유일무이한 심벌 값을 사용했다
  const control = {
    UP: Symbol('up'),
    DOWN: Symbol('down')
  };

  const test = control.UP;
  console.log(test === control.UP);

  // 심벌 값으로 프로퍼티 키 사용하기
  // 대괄호로 감싸줘야 한다
  const obj = {
    [Symbol.for('anko')]: 1
  };
  console.log(obj[Symbol.for('anko')]); // 1
  
}());
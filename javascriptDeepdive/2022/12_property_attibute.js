(function () {
  // 데이터 프로퍼티
  const person = {
    name: 'kim'
  };

  console.log(Object.getOwnPropertyDescriptor(person, 'name')); // {value: 'kim', writable: true, enumerable: true, configurable: true}
  // 어트리뷰트 value 값은 프로퍼티 값(kim)으로 초기화 되며,
  // writable, enumerable, configurable 는 true로 초기화된다.
})();
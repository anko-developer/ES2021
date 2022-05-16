(function () {
  // 데이터 프로퍼티
  const person = {
    name: 'kim'
  };

  console.log(Object.getOwnPropertyDescriptor(person, 'name')); // {value: 'kim', writable: true, enumerable: true, configurable: true}
  // 어트리뷰트 value 값은 프로퍼티 값(kim)으로 초기화 되며,
  // writable, enumerable, configurable 는 true로 초기화된다.

  function deepFreeze(target) {
    // 객체가 아니거나 동결된 객체는 무시하고 객체이고 동결되지 않은 객체만 동결한다.
    if (target && typeof target === 'object' &&  !Object.isFrozen(target)) {
      Object.freeze(target);
      Object.keys(target).forEach(key => deepFreeze(target[key]));
    }

    return target;
  }

  const person1 = {
    name: 'Kim',
    address: { city: 'Seoul' }
  };

  deepFreeze(person1);

  console.log(Object.isFrozen(person1)); // true

  // 중첩 객체까지 동결한다.
  console.log(Object.isFrozen(person1.address)); // true

  person1.address.city = 'Busan';
  console.log(person1); // {name: 'kim', addressL {city: 'Seoul}}
  
  
  
})();
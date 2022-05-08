(function () {
  'use strict';
  
  // const 키워드를 사용해 선언한 변수에 할당한 원시 값은 변경할 수 없다. 
  // 하지만 변수에 할당한 객체는 변경할 수 있다.
  const app = {};
  app.a = 1;
  console.log(app); // {a: 1}

  // 원시 값은 변경이 불가능한 값이다
  let num = 1;
  num = 10;

  // 원시 값을 변경한 것이 아닌, 새로 할당 된 10이라는 number 값을 새로운 메모리 공간 주소를 확보하여 거기에 다시 연결한 것이지
  // 기본의 1이라는 number 값이 저장되어 있는 메모리 공간을 수정한 것이 아니다.
  // 원시 값은 어떤 일이 있어도 불변한다. 따라서 예기치 못한 변경으로부터 자유롭다. 이는 데이터의 신뢰성을 보장한다!
  console.log(num);

  // 원시 값을 갖는 변수를 할당하면 할당받는 변수에는 할당되는 변수의 원시 값이 복사되어 전달된다. 이를 값에 의한 전달 이라 한다.
  // copy 변수에 원시 값을 갖는 score 변수를 할당하면 할당받는 변수(copy)에는 변수(score)의 원시 값 80이 복사되어 전달된다.
  // 둘다 숫자 값 80을 갖는다는 점에서는 동일하지만 score 변수와 copy 변수의 값 80은 "다른 메모리 공간에 저장된 별개의 값이다."
  let score = 80;
  let copy = score;

  console.log(score, copy); // 80, 80
  console.log(score === copy); // true

  // score 변수와 copy 변수의 값은 다른 메모리 공간에 저장된 별개의 값이다.
  // 따라서 score 변수의 값을 변경해도 copy 변수의 값에는 어떠한 영향도 주지 않는다.
  score = 100;

  console.log(score, copy);
  console.log(score === copy); // false


  // 객체는 변경 가능한 값이다.
  // 객체를 할당한 변수는 재할당 없이 객체를 직접 변경할 수 있다, 재할당 없이 프로퍼티를 동적으로 추가할 수도 있고
  // 프로퍼티 값을 갱신할 수도 있으며 자체를 삭제할 수도 있다.
  const person = {
    name: 'kim'
  };

  // 프로퍼티 값 갱신
  person.name = 'anko';

  // 프로퍼티 동적 생성
  person.age = 4;
  console.log(person);


  /**
   * 얕은 복사, 깊은 복사
   * 
   * 객체를 프로퍼티 값으로 갖는 객체의 경우 얕은 복사는 한 단계까지만 복사하는 것을 말하고
   * 깊은 복사는 객체의 중첩되어 있는 객체까지 모두 복사하는 것을 말한다.
   * 
   * 얕은 복사는 객체에 중첩되어 있는 객체의 경우 참조 값을 복사하고 
   * 깊은 복사는 객체의 중첩되어 있는 객체까지 모두 복사해서 원시 값처럼 완전한 복사를 만든다는 차이가 있다.
   */

  // 얕은 복사
  const o = {
    x: {
      y: 1
    }
  };
  const c1 = {...o};
  console.log(c1 === o); // false
  console.log(c1.x === o.x); // true

  // 깊은 복사
  const v = 1;
  const c2 = v;
  console.log(c2 === v); // true

  // 얕은 복사(참조 값을 복사)
  const g = { x: 1 };
  const c3 = g;
  console.log(c3 === g); // true


  const person1 = {
    name: 'kim'
  };

  const person2 = {
    name: 'kim'
  };

  console.log(person1 === person2); // 서로가 가리키는 객체는 비록 내용은 같지만 다른 메모리에 저장된 별개의 객체다. false
  console.log(person1.name === person2.name); // 두 표현식 모두 원시값 kim으로 평가 되므로 true
})();
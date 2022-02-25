(function () {
  const person = {
    name: 'Kim'
  };

  // 얕은 복사(참조 값을 복사), copy와 person은 동일한 참조 값을 갖는다.
  const copy = person;
  console.log(copy === person); // true

  // copy를 통해 객체를 변경한다.
  copy.name = 'Lee';

  // person을 통해 객체를 변경한다.
  person.address = 'Seoul';

  // copy와 person은 동일한 객체를 가리킨다.
  // 따라서 어느 한쪽에서 객체를 변경하면 서로 영향을 주고받는다.
  console.log(person); // {name: 'Lee', address: 'Seoul'};
  console.log(copy); // {name: 'Lee', address: 'Seoul'};

  const person1 = {
    name: 'Lee'
  };

  const person2 = {
    name: 'Lee'
  };

  console.log(person1 === person2);
  console.log(person1.name === person2.name);
})();

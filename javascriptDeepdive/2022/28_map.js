(function() {
  // const { size } = new Set([1,2,3,4]);
  // console.log(size); // 4

  const map = new Map([['key1', 'value1'], ['key2', 'value2']]);
  console.log(map.size); // 2

  // map은 set 메서드로 요소를 추가
  map
    .set('key3', 'value3')
    .set('key4', 'value4');
  console.log(map);


  // get 메서드로 해당 key 값의 value 값을 반환
  console.log(map.get('key3')); // value3


  // has 메서드로 요소 존재 여부 확인
  console.log(map.has('key4')); // true
  console.log(map.has('test')); // false


  // clear 메서드로 요소 일괄삭제
  map.clear();
  console.log(map); // Map(0) {size: 0}


  // forEach로 요소 순회 하기
  // arguments(현재 순회 중인 요소값, 현재 순회 중인 키값, 현재 순회 중인 Map 객체 자체)
  const wook = { name: 'wook' };
  const ming = { name: 'ming' };

  const test = new Map([[wook, 'developer'], [ming, 'designer']]);
  test.forEach((v, k, map) => console.log(v, k, map));

  // developer {name: 'wook'} Map(2) {{…} => 'developer', {…} => 'designer'};
  // designer {name: 'ming'}name: "ming"[[Prototype]]: Object Map(2) {{…} => 'developer', {…} => 'designer'};


  // Map 객체는 이러터블이기 때문에 for of, spread, 디스트럭처링 모두 가능
  for (const value of test) {
    console.log(value);
  }

  console.log([...test]);

  const [a, b] = test;
  console.log(a, b); // (2) [{…}, 'developer']     (2) [{…}, 'designer']

  
  // Map.prototype.keys는 요소키를 값으로 갖는 이터레이터를 반환
  for (const key of test.keys()) {
    console.log(key); // {name: 'wook'}  {name: 'ming'}
  }

  // 요소값을 값으로 갖는 이터레이터를 반환
  for (const value of test.values()) {
    console.log(value); // developer designer
  }

  // 요소키와 요소값을 값으로 갖는 이터레이터를 반환
  for (const entry of test.entries()) {
    console.log(ventrya);
  }
}());
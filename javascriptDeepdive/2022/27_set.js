(function() {
  // set 생성자 함수는 중복요소는 허용하지 않음
  // 그걸 이용하여 array.filter 처럼 사용 가능
  const filterFunc = array => [...new Set(array)];
  console.log(filterFunc([1,2,3,3,3,3,5,4,4,6])); // [1, 2, 3, 5, 4, 6] 

  // A, B의 교집합 구하기
  // 아래 두가지 방법으로 구현 가능

  // Set.prototype.intersection = function (set) {
  //   const result = new Set();

  //   for (const value of set) {
  //     if (this.has(value)) result.add(value); 
  //   }

  //   return result;
  // };

  Set.prototype.intersection = function (set) {
    return new Set([...this].filter(v => set.has(v)));
  };

  const setA = new Set([1, 2, 3, 4]);
  const setB = new Set([2, 4]);

  // setA 와 setB의 교집합
  console.log(setA.intersection(setB)); // Set(2) {2, 4}


  // A, B의 합집합 구하기
  // 아래 두가지 방법으로 구현 가능
  // Set.prototype.union = function (set) {
  //   const result = new Set(this);

  //   for (const value of set) {
  //     result.add(value);
  //   }

  //   return result;
  // };

  Set.prototype.union = function (set) {
    return new Set([...this, ...set]);
  }

  console.log(setA.union(setB)); // Set(4) {1, 2, 3, 4}


  // A, B의 차집합 구하기
  // 아래 두가지 방법으로 구현 가능
  // Set.prototype.difference = function (set) {
  //   // this(Set 객체)를 복사
  //   const result = new Set(this);

  //   for (const value of set) {
  //     // 차집합은 어느 한쪽 집합에는 존재하지만 다른 한쪽 집합에는 존재하지 않는 요소로 구성된 집합이다.
  //     result.delete(value);
  //   }

  //   return result;
  // };

  Set.prototype.difference = function (set) {
    return new Set([...this].filter(v => !set.has(v))); // 교집합의 반대 방법으로 구하면 됨
  };

  console.log(setA.difference(setB)); // Set(2) {1, 3}
  console.log(setB.difference(setA)); // Set(0)


  // A와 B의 부분 집합과 상위 집합
  // superset의 모든 요소가 subset의 모든 요소를 포함하는지 확인
  // Set.prototype.isSuperset = function (set) {
  //   for (const value of set) {
  //     if (!this.has(value)) {
  //       return false;
  //     }

  //     return true;
  //   }
  // };

  Set.prototype.isSuperset = function (subset) {
    const superArray = [...this];
    return [...subset].every(v => superArray.includes(v));
  };

  console.log(setA.isSuperset(setB)); // true
  console.log(setB.isSuperset(setA)); // false
}());
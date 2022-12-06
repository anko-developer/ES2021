(function() {
  // 배열과 같은 이터러블 또는 객체 리터럴에서 필요한 값만 추출하여 변수에 할당할 때 유용하다.a1

  // 1. REST 프로퍼티
  const [arr6, ...arr7] = ['가', '나', '다', '라'];
  console.log(arr6); // '가';
  console.log(arr7); // ['나, '다', '라'];

  const {name, ...other} = {name: '유아이', age: 50, job: '무직'};
  console.log(name); // '유아이'
  console.log(other); // {age: 50, job: '무직'}


  // 2. String 객체의 length 프로퍼티 사용
  const str = 'UI개발팀';
  const {length, ...first} = str;
  console.log(first); // {0: 'U', 1: 'I', 2: '개', 3: '발', 4: '팀'}
  console.log(length); // 5


  // 3. Vuex actions Example
  // async FETCH_ASK(context) {
  //   const response = await fetchAskList();
  //   context.commit('SET_ASK', reponse.data);
  //   return response;
  // },

  // async FETCH_ASK({ commit }) {
  //   const response = await fetchAskList();
  //   commit('SET_ASK', reponse.data);
  //   return response;
  // },
}());
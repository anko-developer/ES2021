(function() {
  // 한 번 비동기는 영원한 비동기
  // let c = 2;
  // setTimeout(() => {
  //   c = 5;
  //   console.log(c);
  // }, 0);

  // console.log('테스트', c); // 2


  // Promise란 , 실행은 바로 화되, 결괏값을 나중에 원할 때 쓸 수 있는 것
  // Promise는 micro 큐에 들어간다.

  let a = 2;
  const p = new Promise((resolve, reject) => {
    console.log('제일먼저');
    setTimeout(() => {
      a = 5;
      console.log(a);
      resolve(a);
    }, 0);
  });

  console.log('딴짓');

  p.then(result => {
    console.log('result', result);
  }).then(() => {

  }).catch(() => {

  }).finally(() => {

  });
})();
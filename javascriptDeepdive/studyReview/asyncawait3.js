function delayP(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve('테스트입니다'), ms);
    reject(error);
  });
};

delayP(5000).then(result => {
    console.log(result);
})

function a () {
  return new Promise((resolve, reject) => {
    resolve('test');
  });
}

a()
  .then((response) => {
    console.log(response);
    setTimeout(response, 3000);
  })
  .then(response => console.log('gogogo'))
  .catch((err) => console.log(err));



// async function start () {
//   const a = await delayP(100000);
//   console.log('a', a);
//   const b = await delayP(3000);
//   console.log('b', b);
// };

// start();
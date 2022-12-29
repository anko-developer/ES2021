
// function delayP(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve('테스트입니다'), ms);
//     reject(error);
//   });
// };

// delayP(5000).then(result => {
//     console.log(result);
// })

async function a() {
  const a = 1;
  console.log('a', a);
  await null;
  const b = await Promise.resolve(2);
  console.log('b', b);
  return a + b;
};

// Promise.resolve(1)
//   .then((a) => {
//     console.log('a', a);
//     return null;
//   })
//   .then(() => {
//     return Promise.resolve(1);
//   })
//   .then((b) => {
//     console.log('b', b);
//     return b;
//   })
//   .catch(err => console.log(err));

a()
  .then(result1 => console.log(result1))
  .then(result2 => console.log(result2))
  .catch(err => console.log(err));
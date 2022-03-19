// 제로초 유튜브 라이브 강의 자바스크립트편 2시간 정도 보면서 끄적끄적..

// 호이스팅 상황을 안만드는 게 제일 좋은 코딩

// eslint 에서 호이스팅에 대한 거 선언하면 
// 호이스팅에 대한 문법을 쓰면 경고를 해주게 됨




// const obj = {
//   name: 'kim',
//   sayName() {
//     console.log(this.name);
//     const inner = () => {
//       console.log(this.name); // 화살표 함수를 썼을 경우 부모가 바라보는 this를 받게 된다 여기서 this는 obj를 가리킨다
//     }
//     inner(); // 호출 했을 때 보니까 화살표 함수네?
//   }
// }

// obj.sayName();




// this는 어디서 호출 했느냐에 따라 판단한다! 
// 어디서 정의 했느냐가 아니라


// [this가 바뀌는 것들]
// arrow function (화살표 함수를 썼을 경우 부모가 바라보는 this를 받게 된다)
// call, apply, bind
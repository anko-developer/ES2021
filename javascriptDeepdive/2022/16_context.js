const x = true;
let y = false;
function a() {
  let a = 4;
  y = true;
  if (x) {
    let a = 3;
    for (let i = 0; i < a; i++) {
      console.log(i);
    }
  }
  // z(); // Error, a() 호출 될 때는 아직 z 가 선언되지 않았기 때문에 Error
}

a();
// function z() {
//   console.log('test');
// }
const z = (a, b) => {
  return a + b;
}; // TDZ
z(3, 5); // 8
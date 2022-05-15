require('./assets/scss/index.scss'); //sass 연결

// import '../javascriptDeepdive/2022/00_modalTest';
// import '../javascriptDeepdive/2022/01_variable';
// import '../javascriptDeepdive/2022/02_type';
// import '../javascriptDeepdive/2022/03_operator';
// import '../javascriptDeepdive/2022/04_controlFlow';
// import '../javascriptDeepdive/2022/05_typeCoercion';
// import '../javascriptDeepdive/2022/06_object';
// import '../javascriptDeepdive/2022/07_immutability';
// import '../javascriptDeepdive/2022/08_function';
// import '../javascriptDeepdive/2022/09_scope';
// import '../javascriptDeepdive/2022/10_private';
import '../javascriptDeepdive/2022/11_let_const';


function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context('./assets/images/svg', true, /\.svg$/));

// loading
window.addEventListener('load', () => {
  document.body.classList.remove('before-load');

  document.querySelector('.loading').addEventListener('transitionend', e => {
    // transition 이 끝났을 때의 이벤트
    document.body.removeChild(e.currentTarget); // currentTarget 를 이용해서 addEventListener를 호출한 객체 자체에 접근
  });
});

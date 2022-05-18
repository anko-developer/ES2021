const APP = document.querySelector('#app');
const vueClone = {};

const init = function() {
  Object.defineProperty(vueClone, 'str', {
    get() {
      console.log('접근했다');
    },
    set(newValue) {
      console.log('변경했다');
      render(newValue);
    }
  });
};

init();

const render = function(value) {
  APP.innerHTML = value;
};





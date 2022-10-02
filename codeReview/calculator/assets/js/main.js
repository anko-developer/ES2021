(function() {
  const $display = document.querySelector('.calc__display');
  // const $calcBtns = document.querySelector('.calc__btnWrap');
  const $calcBtn = document.querySelectorAll('.calc__btn');

  $calcBtn.forEach((item) => {
    item.addEventListener('click', function() {
      console.log(this.classList.contains('is-operator') ? '있다' : '없다');
    });
  });
}());
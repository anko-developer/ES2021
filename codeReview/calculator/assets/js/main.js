(function() {
  /**
   * state = operator 버튼을 눌렀었는지에 대한 체크 값
   */

  const $display = document.querySelector('.calc__display');
  const $calcBtn = document.querySelectorAll('.calc__btn');
  
  let state = false;
  let operator = '';
  let previousNum = '';
  let presentNum = '';

  const calcFunc = function(num1, operator, num2) {
    let result = 0;

    if(operator === '+') {
      result = Number(num1) + Number(num2); // '+'버튼을 눌렀을 때
    }
    else if(operator === '-') {
      result = Number(num1) - Number(num2); // '-'버튼을 눌렀을 때
    }
    else if(operator === '*') {
      result = Number(num1) * Number(num2); // '*'버튼을 눌렀을 때
    }
    if(operator === '/') {
      result = Number(num1) / Number(num2); // '/'버튼을 눌렀을 때
    }
    return result;
  };

  $calcBtn.forEach((item) => {
    item.addEventListener('click', function() {
      // 숫자 버튼
      if (this.classList.contains('is-number')) {
        // 연산자를 누르기 전 체크 값
        if (!state) {
          if ($display.textContent === '0') {
            previousNum = this.textContent
            $display.textContent = this.textContent;
          } else {
            previousNum = $display.textContent + this.textContent;
            $display.textContent += this.textContent;
          }
        // 연산자를 누른 후 체크 값
        } else {
          if (presentNum === '') {
            presentNum = this.textContent;
            $display.textContent = this.textContent;
          } else {
            presentNum = $display.textContent + this.textContent;
            $display.textContent += this.textContent;
          }
          
        }
      
      // 연산자 버튼
      } else if (this.classList.contains('is-operator')) {
        state = true;
        operator = this.textContent;
      
        // 계산 버튼
      } else if (this.classList.contains('is-calc')) {
        $display.textContent = calcFunc(previousNum, operator, presentNum);
      }
    });
  });
  
}());
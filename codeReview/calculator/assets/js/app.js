(function() {
  const $display = document.querySelector('.calc__display');
  const $calcBtn = document.querySelectorAll('.calc__btn');
  const obj = {
    calcValue: '', // 계산된 것 계속 체크
    saveValue: '', // 제일 후순위로 입력된 값 체크
    operator: '', // 연산자
  };
  
  // 숫자 계산
  const getNumber = (value) => {
    if (obj.operator) {
      if ((value === '.' && !/[.]/g.test(obj.saveValue)) || /^[0-9]$/g.test(value)) {
        obj.saveValue += value;
      }
      $display.textContent = obj.saveValue;
    } else {
      if ((value === '.' && !/[.]/g.test(obj.calcValue)) || /^[0-9]$/g.test(value)) {
        obj.calcValue += value;
      }
      $display.textContent = obj.calcValue;
    }

    console.log(obj);
  };

  // 결과 계산
  const calc = () => {
    switch (obj.operator) {
      case '+':
        obj.calcValue = parseFloat(obj.calcValue) + parseFloat(obj.saveValue);
        break;
      
      case '-':
        obj.calcValue = parseFloat(obj.calcValue) - parseFloat(obj.saveValue);
        break;

      case '/':
        obj.calcValue = parseFloat(obj.calcValue) / parseFloat(obj.saveValue);
        break;

      case 'X':
        obj.calcValue = parseFloat(obj.calcValue) * parseFloat(obj.saveValue);
        break;

      case '**':
        obj.calcValue = parseFloat(obj.calcValue) ** parseFloat(obj.saveValue);
        break;

      case '%':
        obj.calcValue = parseFloat(obj.calcValue) % parseFloat(obj.saveValue);
        break;
    }

    obj.saveValue = '';
    console.log(obj);
  };

  // 연산자 체크
  const operator = (value) => {
    if (obj.calcValue && obj.saveValue) {
      calc();
      $display.textContent = obj.calcValue;
    }
    
    obj.operator = value;
    console.log(obj);
  };

  // 결괏값
  const result = () => {
    calc();

    if (obj.calcValue === '') {
      return;
    }

    $display.textContent = obj.calcValue;
    obj.operator = '';
    console.log(obj);
  };

  // 초기화
  const reset = () => {
    obj.calcValue = '';
    obj.saveValue = '';
    obj.operator = '';
    $display.textContent = 0;
  };

  $calcBtn.forEach((item) => {
    item.addEventListener('click', function() {
      if (item.dataset.type === 'number') {
        return getNumber(this.textContent);
      }

      if (item.dataset.type === 'result') {
        return result();
      }

      if (item.dataset.type === 'reset') {
        return reset();
      }

      if (item.dataset.type === 'operator') {
        return operator(this.textContent)
      }
    });
  });
}());
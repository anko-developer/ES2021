/**
 * 29% 라는 서비스에서는 모든 제품을 29% 할인한다.
 * 제품의 원가를 입력하고 계산 버튼을 누르면 
 * 원가에서 29% 할인된 가격은 얼마인지 계산된다.
 */
const PERCENT = 29;
const beforePrice = document.querySelector('.beforePrice');
const nowPrice = document.querySelector('.nowPrice');
const calcBtn = document.querySelector('.calcBtn');
const saleInfo = {};

// 객체의 프로퍼티에 접근 및 변경 값을 감지하는 init 함수
const init = function() {
  Object.defineProperties(saleInfo, {
    nowPrice: {
      get() {
        console.log('접근');
      },
      set(newValue) {
        console.log('변경');
        render(newValue);
      }
    }
  });
};

// 변경된 프로퍼티 값을 뿌려주는 render 함수
const render = function(value) {
  nowPrice.innerText = value;
};

// 할인된 가격을 계산해주는 생성자 함수
const SaleCalc = function(obj) {
  this.name = obj.name;
  this.price = obj.price;
  this.calc = Math.round(((100 - PERCENT) * 0.01) * this.price);
};

// 계산 버튼 클릭 이벤트
calcBtn.addEventListener('click', () => {
  const shirt = new SaleCalc({
    name: '셔츠',
    price: beforePrice.value
  });

  saleInfo.nowPrice = shirt.calc;
});
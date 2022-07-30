function foo() {
  let x = 1;
  const y = 2;

  function bar() {
    x += 1;
    console.log(x);
    debugger;
  }

  return bar;
}

const test = foo();
test(); // 2
test(); // 3
test(); // 4


const counter = (function() {
  let num = 0;

  return {
    plus() {
      return ++num;
    },
    minus() {
      return num > 0 ? --num : 0;
    }
  };
}());

console.log(counter.plus());
console.log(counter.plus());
console.log(counter.minus());
console.log(counter.minus());
console.log(counter.minus());


const Calc = function () {
  let num = 0;

  Calc.prototype.plus = function() {
    return ++num;
  };
  
  Calc.prototype.minus = function() {
    return num > 0 ? --num : 0;
  };
};

const calc = new Calc();

console.log('calc', calc.plus());
console.log('calc', calc.plus());
console.log('calc', calc.minus());
console.log('calc', calc.minus());


// 문제점: counter 자유변수 상태가 서로 클로저끼리 공유가 안됨
function mackCounter(predicate) {
  let counter = 0;

  return function() {
    counter = predicate(counter);
    return counter;
  }
}

function go(num) {
  return ++num;
}

function out(num) {
  return --num;
}

const testPlus = mackCounter(go);
const testMinus = mackCounter(out);

console.log(testPlus());
console.log(testMinus());



(function() {
  const counter = (function() {
    // 자유변수
    let counter = 0;

    // 함수를 인수로 전달받은 클로저를 반환
    return function(predicate) {
      // 인수로 전달받은 보조 함수에 상태 변경을 위암한다.
      counter = predicate(counter);
      return counter;
    }
  })(); 

  function go(num) {
    return ++num;
  }
  
  function out(num) {
    return --num;
  }

  console.log(counter(go));
  console.log(counter(go));
  console.log(counter(go));
  console.log(counter(out));
  console.log(counter(out));
  console.log(counter(out));
})();
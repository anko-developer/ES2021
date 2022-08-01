class App {
  constructor() {
    this.$button = document.querySelector('.testBtn');
    this.count = 0;

    this.$button.onclick = this.increase;
  }

  increase = () => {
    this.$button.textContent = ++this.count;
  }
}

new App();


// private 필드는 반드시 클래스 몸체에 정의해야한다.
class MakeCounter {
  #count = ''; // private 필드 정의
  static #num = 10; // static private 필드 정의 (정적)

  constructor(num) {
    this.#count = num;
  }

  get count() {
    return this.#count;
  }

  static what() {
    return ++MakeCounter.#num;
  }
}

const test = new MakeCounter('333');
console.log(test.count); // private 필드에 접근
console.log(MakeCounter.what()); // 정적 메서드 호출


// 상속에 의한 클래스 확장

class Animal {
  constructor(age, weight) {
    this.age = age;
    this.weight = weight;
  }

  eat() {
    return 'eat';
  }
}

class Bird extends Animal {
  fly() {
    return 'fly';
  }
}

const bird = new Bird(1, 5);

console.log(bird);
console.log(bird instanceof Bird); // true

console.log(bird.eat());
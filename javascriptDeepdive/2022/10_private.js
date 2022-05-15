(function () {
  const Counter = (function () {
    // private 변수
    let num = 0;

    // 외부에 노출되는 퍼블릭 멤버(public member)
    // 외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환한다.
    return {
      plus() {
        return ++num;
      },
      minus() {
        return --num;
      }
    };
  })();

  console.log(Counter.num); // undefined
  console.log(Counter.plus()); // 1
  console.log(Counter.plus()); // 2
  console.log(Counter.minus()); // 1
  console.log(Counter.minus()); // 0
})();
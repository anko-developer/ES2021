(function() {
  // Codeit으로 복습 중


  // 옵셔널 파라미터를 사용
  // ex) orderSetMenu('코드웨잇 멜트'); 처럼 argument 값에 음료를 입력하지 않으면
  //     optional parameter를 사용하여 스프라이트를 기본음료로 제공
  function orderSetMenu(sandwich, drink = '스프라이트') {
    console.log(`주문하신 ${sandwich}, ${drink} 세트메뉴 나왔습니다!`);
  }
  
  // 테스트 코드
  orderSetMenu('코드웨잇 클럽');
  orderSetMenu('터키베이컨 아보카도', '코카콜라');
  orderSetMenu('코드웨잇 멜트');
  orderSetMenu('이탈리안 비엠티', '닥터페퍼');
  orderSetMenu('에그마요', '환타 오렌지');




  // 상수 구분 (상수는 대문자로 구분)
  const PI = 3.14;
  let radius = 0;

  // 원 넓이 계산
  function calc() {
    return PI * radius * radius;
  }



  // 피보나치수열
  let current = 1;
  let previous = 0;

  for (let i = 1; i <= 50; i++) {
    console.log(current);
    let temp = previous;  // previous를 임시 보관소 temp에 저장
    previous = current;
    current = current + temp;  // temp에는 기존 previous 값이 저장돼 있음
  }
})();
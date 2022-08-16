(function printNow() {
  const today = new Date();
  const dayNames = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일'
  ];

  const day = dayNames[today.getDay()];
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // 0 ~ 11 이기 때문에 + 1
  const date = today.getDate();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  const ampm = hour <= 12 ? 'am' : 'pm'; 

  // 12시간제로 변경
  hour %= 12;
  
  // hour이 0이면 12를 재할당
  hour = hour || 12;

  min = min < 10 ? '0' + min : min;
  sec = sec < 10 ? '0' + sec : sec;

  const now = `${year}년 ${month}월 ${date}일 ${day} ${hour}시 ${min}분 ${sec}초 ${ampm} 입니다.`;
  console.log(now);

  // 재귀 함수로 호출 1초마다
  setTimeout(printNow, 1000);
}());
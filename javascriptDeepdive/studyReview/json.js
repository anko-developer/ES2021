(function() {
  const obj = {
    name: 'Kim',
    age: 35,
    alive: true,
    hobby: ['tennis', 'game'],
  };

  const filter = (key, value) => {
    return typeof value === 'number' ? undefined : value; 
  };
  
  /**
   * JSON.stringify 메서드에 두 번째 인수로 replacer 함수를 전달한다.
   * @param obj JSON 문자열로 바꿀 객체
   * @param filter replacer 함수
   * @param 2 문자열로 바꿀 때 들여쓰기 갯수
   */
  const strFilteredObj = JSON.stringify(obj, filter, 2);
  console.log(typeof strFilteredObj, strFilteredObj);
}());
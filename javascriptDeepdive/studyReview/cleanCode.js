(function() {
  /**
   * 전역 공간을 더럽히지 말자
   * 
   * 1. 전역 변수를 만들지말자!
   * 2. 지역 변수로만 만들자!
   * 3. window, global을 조작 X
   * 4. IIFE, Module, const/let, Closure 사용으로..
   */
  const arr1 = [1, 2];
  const arr2 = [4, 5].concat(arr1);
  console.log(arr1);
  console.log(arr2);

  // 임시 변수를 제거하고
  // 명확하게 바꾸자 혹은 객체를 리턴으로 아예 해버리기

  function getElements() {
    const result = {}; // 임시 객체

    result.title = document.querySelector('.title');
    result.text = document.querySelector('.text');
    result.value = document.querySelector('.value');

    return result;
  }

  function getElements() {
    const result = {
      title: document.querySelector('.title'),
      text: document.querySelector('.text'),
      value: document.querySelector('.value'),
    };

    return result;
  }

  function getElements() {
    return {
      title: document.querySelector('.title'),
      text: document.querySelector('.text'),
      value: document.querySelector('.value'),
    };
  }
}());
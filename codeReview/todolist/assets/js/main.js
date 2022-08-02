/**
 * 대문자 const는 '하드 코딩한' 값의 별칭을 만들 때 사용
 * Array - todoItems 
 */

(function() {
  // localStroage 값을 반복문으로 불러오고 Array에 넣어줌
  const storage = {
    fetch() {
      const arr = [];
      if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }  
      }
      return arr;
    }
  }

  const todoItems = storage.fetch();
  const textBox = document.querySelector('.todo__textArea');
  const addBtn = document.querySelector('.add-btn');

  // 추가 버튼
  addBtn.addEventListener('click', function() {
    let item = textBox.value;
    const obj = {
      completed: false,
      todoItems: item
    };

    localStorage.setItem(item, JSON.stringify(obj));
    todoItems.push(obj);
  });
})();
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
  const todoList = document.querySelector('.todo__list');
  const textBox = document.querySelector('.todo__textArea');
  const addBtn = document.querySelector('.add-btn');

  // 저장되어있는 리스트 반복문 초기 실행
  // <input class='check-btn' type='checkbox' checked>
  function itemCreated() {
    todoList.innerHTML = '';

    todoItems.forEach((el, index) => {
      const item = `
        <li data-key='${el.todoItems}' data-check='${el.completed}' data-index='${index}' class='todo__item'>
          <span class='check-btn'></span>
          <span class='text'>${el.todoItems}</span>
          <button class='del-btn' type='button'>삭제</button>
        </li>
      `;
  
      todoList.innerHTML += item;
    });
  }
  itemCreated();


  // 이벤트 버블링으로 동적 요소 감지
  todoList.addEventListener('click', function(e) {
    // 삭제 버튼
    if (e.target.className === 'del-btn') {
      localStorage.removeItem(e.target.parentNode.dataset.key); // localStorage 에서 해당 key 값을 삭제
      todoItems.splice(e.target.parentNode.dataset.index, 1); // Array 에서도 index 값으로 부터 1개 splice
      
      itemCreated();
    }

    // 체크 버튼
    if (e.target.className === 'check-btn') {
      todoItems[e.target.parentNode.dataset.index].completed = !todoItems[e.target.parentNode.dataset.index].completed; // Array 에서도 completed 값 업데이트
      localStorage.removeItem(e.target.parentNode.dataset.key); // localStorage 에서도 값을 갱신 해주기 위해 remove하고
      localStorage.setItem(e.target.parentNode.dataset.key, JSON.stringify(todoItems[e.target.parentNode.dataset.index])); // 다시 set
    }
  });
  

  // todoList 갱신
  function update() {
    textBox.value = '';
    itemCreated();
  }
  

  // 추가 버튼
  addBtn.addEventListener('click', function() {
    const item = textBox.value;
    const obj = {
      completed: false,
      todoItems: item
    };

    localStorage.setItem(item, JSON.stringify(obj));
    todoItems.push(obj);
    update();
  });
})();
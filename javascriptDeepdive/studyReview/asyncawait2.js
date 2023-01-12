(function() {
  /**
   * UserData Fetch Function
   * @param {string} url api 주소
   * @returns 유저 데이터
   */
  const fetchUser = url => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.send();

      xhr.onload = () => {
        xhr.status === 200 ? resolve(JSON.parse(xhr.response)) : reject(new Error(xhr.status));
      }
    });
  };

  async function logName() {
    const user = await fetchUser('http://localhost:3000/todos/3');
    if (user.id === 3) {
      console.log(user.content);
    }
  }
  // logName();

  function fetchItems() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        var items = [1,2,3];
        resolve(items)
      }, 3000);
    });
  }

  async function logItem() {
    const result = await fetchItems();
    console.log(result);
    console.log('test');
  }
  // logItem();

  //============= 실용 예제 ================
  const fetchInfo = () => {
    const url = 'http://localhost:3000/todos/1';
    return fetch(url).then((response) => {
      return response.json();
    });
  };

  const fetchOther = () => {
    const url = 'http://localhost:3000/todos/2';
    return fetch(url).then(response => {
      return response.json();
    });
  };

  async function logTodoComplate() {
    try {
      const user = await fetchInfo(); 
      if (user.id === 1) {
        const { completed } = await fetchOther();
        console.log(completed);
      }
    } catch (err) {
      console.log(err);
    }
  }

  logTodoComplate();
}());
(function() {
  const promiseGet = url => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.send();

      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject(new Error(xhr.status));
        }
      };
    })
  };

  // promiseGet('http://localhost:3000/todos')
  //   .then(response => console.log(response))
  //   .catch(error => console.log(error))
  //   .finally(() => console.log('Bye!'));

  const url = 'http://localhost:3000';

  // 프로미스 체이닝 예
  promiseGet(`${url}/todos/3`)
    .then(({ id }) => promiseGet(`${url}/todos/${id}`))
    .then(info => console.log(info))
    .catch(error => console.log(error));
}());
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

  // Promise Chain 예
  promiseGet(`${url}/todos/3`)
    .then(({ id }) => promiseGet(`${url}/todos/${id}`))
    .then(info => console.log(info))
    .catch(error => console.log(error));

  const githubIds = ['anko-developer', 'joshua1988'];
  
  // Promise All 예
  Promise.all(githubIds.map(id => promiseGet(`https://api.github.com/users/${id}`)))
    .then(users => users.map(user => user.login))
    .then(console.log)
    .catch(error => console.log(error));
}());
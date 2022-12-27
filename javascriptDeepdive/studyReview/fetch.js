(function() {
  fetch('http://localhost:3000/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error));

  const request = {
    get(url) {
      return fetch(url);
    },
    post(url, payload) {
      return fetch(url, {
        method: 'POST',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    },
    patch(url, payload) {
      return fetch(url, {
        method: 'PATCH',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    },
    delete(url) {
      return fetch(url, { method: 'DELETE' });
    }
  };

  // GET 요청
  request.get('http://localhost:3000/todos/2')
    .then(response => response.json())
    .then(todos => console.log('todos', todos))
    .catch(error => console.log(error));
  
  // POST 요청
  request.post('http://localhost:3000/todos', {
    id: 5,
    content: '아바타2',
    completed: true
  }).then(response => response.json())
    .then(todos => console.log(todos))
    .catch(error => console.log(error));

  // PATCH 요청
  request.patch('http://localhost:3000/todos/5', {
    content: '아바타3'
  }).then(response => response.json())
    .then(todos => console.log(todos))
    .catch(error => console.log(error));

    // DELETE 요청
    request.delete('http://localhost:3000/todos/4')
      .then(response => response.json())
      .then(todos => console.log(todos))
      .catch(error => console.log(error));
}());
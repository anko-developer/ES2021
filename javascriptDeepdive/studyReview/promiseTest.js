(function() {
  const data = fetch('http://localhost:3000/todos/1');
  data.then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err));

  const url = 'http://localhost:3000/todos/2';
  
  const test = url => {
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
    });
  };

  test(url).then(({ id }) => {
    return id;
  }).then(res => test(`http://localhost:3000/todos/${res + 1}`))
    .then(res => console.log(res))
    .catch(err => console.log(err));

  
    const go = document.querySelector('.contents').firstElementChild;
    console.log(go);

  const item = document.querySelectorAll('.item');
  item.forEach(li => {
    const link = li.firstElementChild;
    if (li.clientWidth < link.clientWidth) {
      console.log('더크다');
    } else {
      console.log('더앙크다');
    }

    link.classList.add('kkk');
  });
}());
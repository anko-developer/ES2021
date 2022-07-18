(function() {
  // 1
  const promise = new Promise((resolve, reject) => {
    console.log('test');

    setTimeout(() => {
      resolve('anko');
    }, 2000);
  });

  promise
  .then((response) => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('마침내');
  });

  // 2
  const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    }, 1000);
  });

  fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num - 1)
      }, 1000);
    });
  })
  .then(num => console.log(num))
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('마침내');
  });

  // 3
  const getHen = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('닭'), 1000);
    });
  };

  const getEgg = hen =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(`${hen} => 달걀`), 1000);
    });
  
  const cook = egg =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(`${egg} => 요리`), 1000);
    });

  getHen()
  .then(hen => getEgg(hen))
  .then(egg => cook(egg))
  .then(meal => console.log(meal))
  .catch(error => {
    console.log(error);
  })
})();
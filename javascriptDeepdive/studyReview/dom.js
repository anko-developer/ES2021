(function() {
  const fruitsList = document.querySelectorAll('#fruits li');
  const test = [...fruitsList];
  test.forEach((item, index) => {
    if (item.className === 'orange') {
      test.splice(index, 1, 'test');
    }
  });
  
  const fruits = document.getElementById('fruits');
  const li = document.createElement('li'); 
  li.textContent = 'test';
  fruits.insertBefore(li, fruits.lastElementChild);
}());
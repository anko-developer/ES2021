(function() {
  const obj = {
    [Symbol.for('name')]: 'anko',
    [Symbol.for('age')]: '5'
  };

  const objTest = {
    [Symbol.for('name')]: 'good',
  }

  console.log(obj[Symbol.for('name')]);
  console.log(objTest[Symbol.for('name')]);
  
  for (const key in obj) {
    console.log(key);
  }
  console.log(Object.getOwnPropertySymbols(obj)[0]); // Symbol(name)
  const symbolTest = Object.getOwnPropertySymbols(obj)[0];
  console.log(obj[symbolTest]); // anko
}()); 
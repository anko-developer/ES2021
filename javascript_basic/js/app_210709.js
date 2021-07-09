(function () {
  const person = {
    name: 'Kim',
    address: 'Seoul',
    __proto__: { age: 20 }
  };

  for (const key in person) {
    if (!person.hasOwnProperty(key)) {
      continue;
    }
    console.log(`${key}: ${person[key]}`);
  }
})();

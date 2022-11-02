(function() {
  const sorting = [2, 1, 1, 5, 4, 5];
  const test = sorting.filter((item, index, self) => self.indexOf(item) === index );
  console.log(test.sort((a, b) => b - a));

  const test1 = [...new Set(sorting)];
  console.log(test1.sort());
  console.log(typeof test1);


  const set = new Set();
  set.add('good');
  console.log(set);

  set.add('bad');
  console.log(set);
  console.log(typeof set);
}());
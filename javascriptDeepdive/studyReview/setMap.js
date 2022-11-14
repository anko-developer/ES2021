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

  const map = new Map([['key1', '명욱'], ['key2', '민정']]);
  map.set('key3', '앙꼬');
  console.log(map);

  const { size } = map;
  console.log(size);

  console.log(map.get('key2'));
  map.forEach((v, k, me) => console.log(v, k, me)); 
}());
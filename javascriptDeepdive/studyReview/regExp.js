(function() {
  const target = 'color colour';
  const regExp = /colou?r/g;
  console.log(target.match(regExp));

  const target1 = 'AA BB 12,345'
  const regExp1 = /[0-9]+/g;
  const regExp2 = /[0-9,]+/g;
  const regExp3 = /[\d,]+/g;
  const regExp4 = /[\D,]+/g;
  console.log(target1.match(regExp1));
  console.log(target1.match(regExp2));
  console.log(target1.match(regExp3));
  console.log(target1.match(regExp4));

  const regExp5 = /[^A]+/g;
  console.log(target1.match(regExp5)); 
}());
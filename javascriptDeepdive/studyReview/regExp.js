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

  const url = 'https://example.com';
  console.log(/^https?:\/\//g.test(url));

  const fileName = 'index.html';
  console.log(/html$/g.test(fileName));

  const target2 = '12345';
  console.log(/^\d+$/g.test(target2));

  const id = 'abc123';
  console.log(/^[A-Za-z0-9]{4,10}$/g.test(id));

  const cellphone = '010-1234-5678';
  console.log(/^\d{3}-\d{3,4}-\d{4}$/g.test(cellphone));

  const target3 = 'abc#123';
  console.log(/[^A-Za-z0-9]/ig.test(target3));
  console.log(target3.replace(/[^A-Za-z0-9]/ig, ''));
}());
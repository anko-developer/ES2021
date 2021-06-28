(function() {
  let foo = 1;
  {
    console.log(foo);
    let foo = 2;
  }
}());
(function () {
  const Person = function (name) {
    this.name = name;
  };

  const wow = new Person('Kim');
  console.log(wow.name);
})();

(function () {
  var MYAPP = {}; // 전역 네임스페이스 객체

  MYAPP.name = 'Kim';
  MYAPP.person = {
    address: 'Seoul'
  }

  console.log(MYAPP.name); // Kim
  console.log(MYAPP.person.address);
})();

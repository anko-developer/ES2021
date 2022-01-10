(function(){
  function Circel(radius) {
    this.radius = radius;
  }

  Circel.prototype = {
    constructor: Circel,
    getArea() {
      return this.radius * 2; 
    }
  };

  const circel1 = new Circel(2);
  console.log(circel1.getArea());
})();
var ounces = 5;

var makeMeCoffee = function(ounces) {
  var beanQty = Math.round(ounces * 1.2083333);
  var waterQty = Math.round(beanQty * 16.4285714);
  var firstPour = beanQty * 2;
  var secondPour = waterQty - firstPour;

  console.log(beanQty, firstPour, secondPour);
};

makeMeCoffee(ounces);

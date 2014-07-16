<<<<<<< HEAD
// $(document).ready(function() {
//
//     var makeMeCoffee = function(ounces) {
//       var beanQty = Math.round(ounces * 1.2083333);
//       var waterQty = Math.round(beanQty * 16.4285714);
//       var firstPour = beanQty * 2;
//       var secondPour = waterQty - firstPour;
//
//       alert('tantos coffee beans'+ secondPour);
//     };
//
//     $( "#forma" ).submit(function( event ) {
//
//       makeMeCoffee($("#ounces").val());
//     });
// });
=======
var ounces = 5;

var makeMeCoffee = function(ounces) {
  var beanQty = Math.round(ounces * 1.2083333).toFixed(2);
  var waterQty = Math.round(beanQty * 16.4285714).toFixed(2);
  var firstPour = (beanQty * 2).toFixed(2);
  var secondPour = (waterQty - firstPour).toFixed(2);

  console.log(beanQty + 'g', firstPour + 'g', secondPour + 'g');
};

makeMeCoffee(ounces);
>>>>>>> c573baaa299f0c09726eadf99d53764d6f0d3139

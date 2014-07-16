$(document).ready(function() {

    $( "#forma" ).submit(function( event ) {
      event.preventDefault();
      makeMeCoffee($("#ounces").val());
    });

    var makeMeCoffee = function(ounces) {
      var beanQty = Math.round(ounces * 1.2083333).toFixed(2);
      var waterQty = Math.round(beanQty * 16.4285714).toFixed(2);
      var firstPour = (beanQty * 2).toFixed(2);
      var secondPour = (waterQty - firstPour).toFixed(2);

      var htmlString = "You need " + beanQty + 'g of coffee';
      $('#directions').text(htmlString);

      console.log('You need ' + beanQty + 'g of coffee');
    };


});

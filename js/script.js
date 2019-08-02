
  
  function Pizza(size, crust, topping) {
    this.sizeName= size;
    this.crustName= crust;
    this.toppingName= topping;
  }
Pizza.prototype.fullFilled = function() {
    return this.sizeName+ " " + this.crustName+ "" + this.toppingName;
  }
  function resetFields() {
    $("input#size").val("");
    $("input#crust").val("");
    $("input#topping").val("");
    
}
  $(document).ready(function() {
  
    $("#order").click(function() {
        alert( "Handler for .submit() called." );
  
    
    $("form#formid").submit(function(event) {
      event.preventDefault();
  
      var inputtedSize = $("select#size").val();
      console.log(inputtedSize);
      var inputtedCrust = $("select#crust").val();
      console.log(inputtedCrust);
      var inputtedTopping = $("select#topping").val();
      console.log(inputtedTopping);
      var newPizza = new Pizza(inputtedSize, inputtedCrust, inputtedTopping );
      console.log(newPizza);
        
      $("ul#contacts").append("<li><span class='contact'>" +  newPizza.fullFilled() + "</span></li>");
  
  
    });
});
 resetFields();
  });

  
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
      
      // $("ul#pizaa").append("<li><span class='contact'>" +  newPizza.fullFilled() + "</span></li>");

      // $("#show-contact").click(function() {
        
        $("#show-contact").show();

        $(".pizza-size").text( newPizza.sizeName);
        
        $(".pizza-crust").text( newPizza.crustName);
        $(".pizza-topping").text( newPizza.toppingName);
        if ($("select#size").val()=="Small" &&  ($("select#crust").val()=="FlatBread Crust")){
          $("ul#pizaa").append("<li> your amount to pay is 456</li>");

        }
   
        // newContact.addresses.forEach(function(address) {
        //   $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      
      });
      
   
});
 resetFields();
  });
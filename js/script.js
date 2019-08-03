
  
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
      if ( $("select#size").val()=== "Small") {
       
       
       var cost1 = 1000;
        console.log(cost1);
      } else if ($("select#size").val() === "Medium") {
       var cost1 = 2000;
      } else if ($("select#size").val()=== "Large") {
        var cost1= 3000;
      }
      else{alert("waaa")}


      var inputtedCrust = $("select#crust").val();

      if ($("select#crust").val()=="FlatBread Crust" ){
        var cost2= 500;
      } else if ($("select#crust").val() === "Custom Crust") {
        var cost2= 400;
      } else if ($("select#crust").val() === "Thin Crust") {
        var cost2= 800;
      }
      else{alert("waaa")}
      var inputtedTopping = $("select#topping").val();
      if ($("select#topping").val()=="Tomato" ){
        var cost3= 300;
      } else if ($("select#topping").val() === "Onions") {
        var cost3= 500;
      } else if ($("select#topping").val() === "Mushroom") {
        var cost3= 600;
      }
      else{alert("waaa")}
      
      var newPizza = new Pizza(inputtedSize, inputtedCrust, inputtedTopping );
     
   
     

        var newPrice=parseInt(cost1)+parseInt(cost2)+parseInt(cost3);
       
        $("ul#pizaa").append("<li><span class='contact'>" + newPrice + "</span></li>");

        $("#show-contact").show();

        $(".pizza-size").text( newPizza.sizeName);
        
        $(".pizza-crust").text( newPizza.crustName);
        $(".pizza-topping").text( newPizza.toppingName);

      
     
      
      });
      $(document).ready(function() {
  
        $("#delivery").click(function() {
          $("#gowith").show()
          if ( $("select#size").val()=== "Small") {
            var price=1000;
            $(".price").text(price);
            console.log(price);
          }
           else if ( $("select#size").val()=== "Medium") {
            var price=1500;
            $(".price").text(price);
            console.log(price);
          }
         else  if ( $("select#size").val()=== "Large") {
          var price=1800;
          $(".price").text(price);
          console.log(price);
          }
          else{}
        });
      });    
 
   
});
 resetFields();
  });
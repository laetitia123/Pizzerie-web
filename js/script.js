
  
  function Pizza(size, crust, topping,number) {
    this.sizeName= size;
    this.crustName= crust;
    this.toppingName= topping;
    this.numberName= number;
  }
 
Pizza.prototype.fullFilled = function() {
    return this.sizeName+ " " + this.crustName+ "" + this.toppingName+"" +this.numberName;
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
      var inputtedNumber = $("input#number").val();
      
      var newPizza = new Pizza(inputtedSize, inputtedCrust, inputtedTopping,inputtedNumber);
     
   
     

        var newPrice=parseInt(cost1)+parseInt(cost2)+parseInt(cost3);
       
        $("ul#pizaa").append("<li><span class='contact'>" + newPrice + "</span></li>");

        $("#show-chosen").show();

        $(".pizza-size").text( newPizza.sizeName);
        
        $(".pizza-crust").text( newPizza.crustName);
        $(".pizza-topping").text( newPizza.toppingName);
        $(".pizza-number").text( newPizza.numberName);


      
     
      
      });
      $(document).ready(function() {
  
        $("#delivery").click(function() {
          $("#gowith").show()
          $(".form3").show()

            var price=1000;
            $(".price").text(price);
            
        });
      });    
 
      $(document).ready(function() {
       
  
        $("#checkout").click(function() {
         
          if ( $("select#size").val()=== "Small") {
           
          var price=1000;
           var cost1 = 1000;
            console.log(cost1);
            
          } else if ($("select#size").val() === "Medium") {
             var price=1000;
           var cost1 = 2000;
           
          } else if ($("select#size").val()=== "Large") {
             var price=1000;
            var cost1= 3000;
          }
          else{alert("waaa")}
    
    
         
          if ($("select#crust").val()=="FlatBread Crust" ){
            var price=1000;
            var cost2= 500;
          } else if ($("select#crust").val() === "Custom Crust") {
            var price=1000;
            var cost2= 400;
          } else if ($("select#crust").val() === "Thin Crust") {
            var cost2= 800;
          }
          else{alert("waaa")}
        
          if ($("select#topping").val()=="Tomato" ){
            var price=1000;
            var cost3= 300;
          } else if ($("select#topping").val() === "Onions") {
            var price=1000;
            var cost3= 500;
          } else if ($("select#topping").val() === "Mushroom") {
            var price=1000;
            var cost3= 600;
          }
          else{alert("waaa")}
          
          // var newPizza = new Pizza(inputtedSize, inputtedCrust, inputtedTopping );
         
       
         
    
          //   var newPrice=parseInt(cost1)+parseInt(cost2)+parseInt(cost3);
          var newTotal=parseInt(cost1)+parseInt(cost2)+parseInt(cost3)+parseInt(price);
          console.log("sagjilsusio;u8q")
       alert(newTotal);
        });
          
      });    
});
 resetFields();
  });
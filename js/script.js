function Pizza(size,Crust, toppings) {
    this. = first;
    this.lastName = last;
    this.addresses = [];
  }
  
  function Pizza(size, crust, topping) {
    this.size = size;
    this.crust= crust;
    this.topping= topping;
  }
  $(document).ready(function() {
  
    $("#order").click(function() {
    //   $("#new-addresses").append('<div class="new-address">' +
    //                                '<div class="form-group">' +
    //                                  '<label for="new-street">Street</label>' +
    //                                  '<input type="text" class="form-control new-street">' +
    //                                '</div>' +
    //                                '<div class="form-group">' +
    //                                  '<label for="new-city">City</label>' +
    //                                  '<input type="text" class="form-control new-city">' +
    //                                '</div>' +
    //                                '<div class="form-group">' +
    //                                  '<label for="new-state">State</label>' +
    //                                  '<input type="text" class="form-control new-state">' +
    //                                '</div>' +
    //                              '</div>');
    // });
  
    $("form#formid").submit(function(event) {
      event.preventDefault();
  
      var inputtedSize = $("input#size").val();
      var inputtedCrust = $("input#crust").val();
      var inputtedtopping = $("input#topping").val();
      var newPizza = new Pizza(inputtedSize,  inputtedCrust, inputtedtopping );
  
      $(".new-address").each(function() {
        var inputtedStreet = $(this).find("input.new-street").val();
        var inputtedCity = $(this).find("input.new-city").val();
        var inputtedState = $(this).find("input.new-state").val();
        var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState)
        newContact.addresses.push(newAddress)
      });
  
      $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
  
  
    });
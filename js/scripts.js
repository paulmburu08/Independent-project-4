$(document).ready(function(){

    
    $("#submit").click(function(event){
        event.preventDefault();
        //getting user input//
        var size = $("input[name='size']:checked").val();
        var crust = $("input[name='crust']:checked").val();
        var toppings = [];
        $.each($("input[name='toppings']:checked"), function(){
            toppings.push($(this).val());
        });
        var pizzaNumber = $("input[name='number']").val();
        //end//
        var pizzaSize = {
            smallPizza : 600,
            mediumPizza : 800,
            largePizza : 1000,
        };     
        var pizzaPrice = (pizzaSize[size])
        var toppingsPrice = toppings.length * 200
        var onePizza = pizzaPrice + toppingsPrice
    
        if(pizzaNumber>1){
            var totalPrice1 = onePizza * pizzaNumber
            alert('Your total Order is '+ totalPrice1 +'KES. Please choose below if you would like your order delivered i.e Extra charges include')
        }  
        else if(pizzaNumber==1){
            var totalPrice1 = onePizza
            alert('Your total Order is '+ totalPrice1 +'KES. Please choose below if you would like your order delivered i.e Extra charges include')
        }
        else{
            alert('Please select number of pizzas you want to order')
        }

    
        var flag = 0;
    $("#yesDelivery").click(function(event){
        event.preventDefault();
        flag = 1;
        var location = prompt('Please enter location')
        var confirmation = confirm("Delivery to your location costs 400KES.Continue?")
        if(confirmation===true){
            alert("Thank you. Your order will be delivered to your location. Please proceed to checkout to process your order")
        }
        else{
            alert("You have cancelled delivery.")
        }
        
    });

    var yes = $("#noDelivery").click(function(event){
        event.preventDefault();
        hasBeenClicked = true;
        alert("Please proceed to checkout to process your order")

    });
    
    $("#checkOut").click(function(event){
        event.preventDefault();
        var totalPrice2 = parseInt(totalPrice1);
        var totalPrice3 = totalPrice2 + 400;

        if(flag==1){
        $("#cart").append("<b>TOTAL COST</b><br>Pizza price: "+ totalPrice1 + "KES<br>Delivery: 400KES<br><b>GRAND TOTAL</b>: "+ totalPrice3 +"KES.")
        alert("Your delivery is on it's way. Enjoy your meal!!")
        }

        else{
            $("#cart").append("<b>TOTAL COST</b><br>Pizza price: "+ totalPrice1 + "KES<br>Delivery: None<br><b>GRAND TOTAL</b>: "+ totalPrice2 +"KES.") 
        }
    });    


});

});
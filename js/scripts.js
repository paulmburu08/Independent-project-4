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
            var totalPrice2 = onePizza
            alert('Your total Order is '+ totalPrice2 +'KES. Please choose below if you would like your order delivered i.e Extra charges include')
        }
        else{
            alert('Please select number of pizzas you want to order')
        }

    });
       
    $("#yesDelivery").click(function(event){
        event.preventDefault();

        var location = prompt('Please enter location')
        var confirmation = confirm("Delivery to your location costs 400KES.Continue?")
        if(confirmation===true){
            alert("Thank you. Your order will be delivered to your location")
        }
        else{
            alert("You have cancelled delivery.")
        }
    });
        

    



});
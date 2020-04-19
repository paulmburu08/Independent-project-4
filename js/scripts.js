$(document).ready(function(){

    
    $("#submit").click(function(){
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
        alert(onePizza)

    });



});
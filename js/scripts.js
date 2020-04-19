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
            smallPizza : 600+"KES",
            mediumPizza : 800+"KES",
            largePizza : 1000+"KES",
        };     
        var pizzaPrice = (pizzaSize[size])

        function ToppingsPrice(first,second,third,fourth,fiveth,sixth){
            this.pepperoni = first;
            this.mushrooms = second;
            this.onions = third;
            this.bacon = fourth;
            this.extraCheese = fiveth;
            this.pineapple = sixth;
        }
        var smallPizza = new ToppingsPrice(100+"KES",100+"KES",100+"KES",100+"KES",100+"KES",100+"KES");
        var mediumPizza = new ToppingsPrice(150+"KES",150+"KES",150+"KES",150+"KES",150+"KES",150+"KES");
        var largePizza = new ToppingsPrice(200+"KES",200+"KES",200+"KES",200+"KES",200+"KES",200+"KES");

        alert((size).pineapple)

    });



});
$(document).ready(function(){

    
    $("#submit").click(function(){
        var size = $("input[name='size']:checked").val();
        var crust = $("input[name='crust']:checked").val();
        var toppings = [];
        $.each($("input[name='toppings']:checked"), function(){
            toppings.push($(this).val());
        });
        console.log(toppings)
        
        
    });



});
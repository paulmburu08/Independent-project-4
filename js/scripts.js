$(document).ready(function(){

    $("#checkOut").click(function(){
        $("#submit").click(function(){
            var pizzaSize = $("input[name='size']:checked").val();
            
            alert(pizzaSize)
        });

    });

});
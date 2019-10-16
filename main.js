$(document).ready(function(){

    
 
    result = ''
    
    $(".buttons").on("click", "button", function(e){
        var val = $(this).html()
 
    
    num1=Number($("#num1").val())

    num2=Number($("#num2").val())

  

        if (val === "+") {
            result = num1 + num2
        } 
        else if (val === "-") {
            result = num1 - num2
        }
        else if (val === "*") {
            result = num1 * num2
        }
        else {
            result = num1/num2
        }

    $("#result").html(result)

    })

    

    })


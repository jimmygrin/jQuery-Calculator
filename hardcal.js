$(document).ready(function(){

    var num1=""
    var num2=""
    var oper=""

    $(".container").on("click", "button", function(e){

       var val=$(this).html()
      
       if(val=== '='){
           if(oper==="+") {
               $("#result").html(Number(num1) + Number(num2))
           } else if(oper==="-") {
            $("#result").html(Number(num1) - Number(num2))
        } else if (oper==="X") {
            $("#result").html(Number(num1) * Number(num2))
        } else if(oper==="/") {
            $("#result").html(Number(num1) / Number(num2))
        }

       } else if (val=== "+" || val=== "-" || val=== "X" || val==="/") {

        oper = val

       } else if (val==="C") {
           num1=""
           num2=''
           oper=''
           $("#result").html("")

       } else {
           if(oper==="") {
            num1 += val
    
           } else {
            num2 += val
           }
       }

     
       console.log("num1:" + num1)
       console.log("oper:" + oper)
       console.log("num2:" + num2)
    })

})
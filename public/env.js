$(document).ready(function(){
    console.log("Document ready")
    $("#addButton").click(function(){
        let number1  = $("#num1").val();
        let number2  = $("#num2").val();
        var nums  = {
            num1:number1,
            num2:number2
        } 
        
        $.get( "/add",nums, function( data ) {
            console.log("Data has returned: "+ data)
            $( "#result" ).val(data);
          });

    })    
})
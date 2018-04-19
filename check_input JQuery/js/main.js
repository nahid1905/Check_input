$(function(){

    // NAME CHECK
    $("#name input").blur(function(){
        if(this.value==""){
            $(this).parent().after("<div>")
            .next().addClass("alert alert-danger")
            .text("Please add your name")
        }
    })
    $("#name input").click(function(){

    $("#name").next(".alert-danger").slideUp();
    })

    
    //  SURNAME CHECK
    $("#surname input").blur(function(){
        if(this.value==""){
            $(this).parent().after("<div>")
            .next().addClass("alert alert-danger")
            .text("Please add your surname")
        }
    $("#surname input").focus(function(){
      $("#surname").next(".alert-danger").slideUp();
    })
       
    })    

    // PASSWORD CHECK
    $("#password input").blur(function(){
        if(this.value.length < 8){
            $(this).parent().after("<div>")
            .next().addClass("alert alert-danger")
            .text("Password length can not be less than 8")
        }
    $("#password input").focus(function(){
      $("#password").next(".alert-danger").slideUp();
    })
    })    

    // SELECT CHECK
    $("#select").blur(function(){
        $("option").each(function(){
           if($("option:selected").text().value=="Select city..."){
            alert("salam")
           }
        })
    })

   
   // EMAIL CHECK
    $("#email input").blur(function(){
        if(this.value.includes("@gmail.com",2   )==false){
           $(this).parent().after("<div>")
            .next().addClass("alert alert-danger")
            .text("Please enter your email correctly")
        }
    $("#email input").focus(function(){
      $("#email").next(".alert-danger").slideUp();
    })
    })

    // TEXTAREA CHECK

    $("#textarea textarea").blur(function(){
        if(this.value.length < 10){
            $(this).parent().after("<div>").next()
            .addClass("alert alert-danger")
            .text("Write about yourself much more...")
        }
    })
    $("#textarea textarea").focus(function(){
      $("#textarea").next(".alert-danger").slideUp();
    })

    // SUBMIT CHECK

    $("#myform #submit").click(function(e){
        e.preventDefault()
        if($("input").val().length!=0){
     
        $("#myform #submit").parent().before("<div>").prev()
        .addClass("alert alert-success")
        .text("Your subscription was successfully added")
        

    }
    else{

         $(this).parent().before("<div>").prev()
        .addClass("alert alert-danger")
        .text("Please fill your inputs correctly")
        
    }
    })
   
   
})


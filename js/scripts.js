$(document).ready(function(){
    $(".design").click(function(){
        $("img#design").toggle();
        $(".design-text").toggle();
    });
    $(".development").click(function(){
        $("img#development").toggle();
        $(".development-text").toggle();
    });
    $(".product-management").click(function(){
        $("img#prod-management").toggle();
        $(".product-management-text").toggle();
    });
    
})

$(document).ready(function(){
    $("button#btn").click(function(event){
        var userName= $("input#inputName").val();
        alert( userName + " we have received your message. Thank you for reaching out to us.")
        event.preventDefault();
    })
})

$(document).ready(function() {
    $("#work1").mouseenter(function() {
        $("#work1text").show();
    });
    $("#work1").mouseleave(function() {
       $("#work1text").hide();
    }); 
    $("#work2").mouseenter(function() {
        $("#work2text").show();        
    });
    $("#work2").mouseleave(function() {
        $("#work2text").hide();
     }); 
    $("#work3").mouseenter(function() {
       $("#work3text").show();
    }); 
    $("#work3").mouseleave(function() {
        $("#work3text").hide();
     }); 
    $("#work4").mouseenter(function() {
        $("#work4text").show();
    });
    $("#work4").mouseleave(function() {
       $("#work4text").hide();
    });
    $("#work5").mouseenter(function() {
        $("#work5text").show();
    });
    $("#work5").mouseleave(function() {
       $("#work5text").hide();
    });   
    $("#work6").mouseenter(function() {
        $("#work6text").show();
    });
    $("#work6").mouseleave(function() {
       $("#work6text").hide();
    });  
    $("#work7").mouseenter(function() {
        $("#work7text").show();
    });
    $("#work7").mouseleave(function() {
       $("#work7text").hide();
    }); 
    $("#work8").mouseenter(function() {
        $("#work8text").show();
    });
    $("#work8").mouseleave(function() {
       $("#work8text").hide();
    }); 
});


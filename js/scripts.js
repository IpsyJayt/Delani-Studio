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
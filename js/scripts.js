$(document).ready(function(){
    $(".design").click(function(){
        $("img#design").toggle();
        $(".design-text").toggle();
    });
    $(".development").click(function(){
        $("img#development").toggle();;
        $(".development-text").toggle();
    })
})
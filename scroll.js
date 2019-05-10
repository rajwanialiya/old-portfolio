var $win = $(window);
var height = $win.height();

$win.scroll(function(){
    if ($(document).scrollTop() > 0.8*height) {
        $('.navbar').addClass('opacity');
        $('.navbar').removeClass('display');
        // $('.nav-link').addClass('green'); 
        // $('.navbar-brand').addClass('green'); 
    }
    else if ($(document).scrollTop() > 0.1*height){
        $('.navbar').addClass('display');
    }
    else if ($(document).scrollTop() < 0.1*height){
        $('.navbar').removeClass('display');
        $('.navbar').removeClass('opacity');
    }
    else if ($(document).scrollTop() < 0.8*height){
        $('.navbar').removeClass('opacity'); 
        // $('.navbar').removeClass('display');
        // $('.nav-link').removeClass('green'); 
        // $('.navbar-brand').removeClass('green'); 
    }
    
    // else if ($(document).scrollTop() > 1.8*height){
    //     $('.navbar').addClass('opacity'); 
    //     $('.nav-link').addClass('secondGreen'); 
    //     $('.navbar-brand').addClass('secondGreen'); 
    // 
    

console.log("scroll"); 
}); 
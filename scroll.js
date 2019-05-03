var $win = $(window);
var height = $win.height();

$win.scroll(function(){
    if ($(document).scrollTop() > 0.8*height) {
        $('.navbar').addClass('opacity');
        // $('.nav-link').addClass('green'); 
        // $('.navbar-brand').addClass('green'); 
    }
    else if ($(document).scrollTop() < 0.8*height){
        $('.navbar').removeClass('opacity'); 
        // $('.nav-link').removeClass('green'); 
        // $('.navbar-brand').removeClass('green'); 
    } else if ($(document).scrollTop() > 1*height){
        $(document.body).css('background-color', 'purple'); 
    // else if ($(document).scrollTop() > 1.8*height){
    //     $('.navbar').addClass('opacity'); 
    //     $('.nav-link').addClass('secondGreen'); 
    //     $('.navbar-brand').addClass('secondGreen'); 
    // 
    }

console.log("scroll"); 
}); 
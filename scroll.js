var $win = $(window);
var height = $win.height();

$win.scroll(function(){
    if ($(document).scrollTop() > 0.8*height) {
        $('.navbar').addClass('opacity');
    }
    else {
        $('.navbar').removeClass('opacity'); 
    }
console.log("scroll"); 
}); 
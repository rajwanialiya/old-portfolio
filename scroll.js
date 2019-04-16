var $win = $(window);
var height = $win.height();

$win.scroll(function(){
    if ($(document).scrollTop() > height) {
        $('.navbar').addClass('hide');
        $('#sidebar').removeClass('hide') 
    }
    else {
        $('.navbar').removeClass('hide'); 
        $('#sidebar').addClass('hide')
    }
console.log("scroll");

}); 
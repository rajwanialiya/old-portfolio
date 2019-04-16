$(document).ready(function() {
    $(document).on("mousemove", function(event){
        var XDirection = event.originalEvent.pageX; 
        var YDirection = event.originalEvent.pageY; 

        $("img").each(function(){
        var XShape = $(this).position.left + 70 // will calculate top left of each image + width/2 = width
        var YShape = $(this).position.left + 70 // will calculate top left of each + height/2 = midpoint
            
        var XDiff = XDirection - XShape; 
        var YDiff = YDirection - YShape; //difference between mouse position and image

        var radians = Math.atan2(YDiff, XDiff);
        var angle = radians * 180 / Math.PI;  

        $(this).css("transform", "rotate(" + angle + "deg)")
        })
    }) 
}) 
$(document).ready(function(){ 
    // var replace = document.getElementById('replace')

    //I am interested in...
    var one = "creating solutions to global issues with a holistic mindset"; 
    var two = "developing an interdisciplinary skillset"
    var three = "building solutions that strengthen our relationship with technology"; 
    var four = "developing strong responsive and interactive design"; 
    var five = "exploring the use of technology to ________"

    var text = [one, two, three, four, five]

    var typed = new Typed("#typed", {
        strings: text,
        typeSpeed: 15,
        backSpeed: 15,
        backDelay: 2000,
        startDelay: 1000,
        loop: true,
        showCursor: true,
        cursorChar: '_',
        autoInsertCss: true,
      });
     
}); 

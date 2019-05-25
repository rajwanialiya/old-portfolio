$(document).ready(function(){ 
    // var replace = document.getElementById('replace')

    //I am interested in...
    var one = "using technology to address global issues"; 
    var two = "developing an interdisciplinary skillset"
    // var three = "improving our relationship with technology"; 
    var four = "producing strong responsive and interactive design"; 
    var five = "exploring the use of technology to develop holistic solutions"

    var text = [one, two, four, five]

    var typed = new Typed("#typed", {
        strings: text,
        typeSpeed: 15,
        backSpeed: 15,
        backDelay: 3000,
        startDelay: 1000,
        loop: true,
        showCursor: true,
        cursorChar: '_',
        autoInsertCss: true,
      });
     
}); 

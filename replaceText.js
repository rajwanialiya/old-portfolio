$(document).ready(function(){ 
    // var replace = document.getElementById('replace')

    //I am interested in...
    var one = "I'm a Systems Design Engineering student at the University of Waterloo and an aspiring developer. I'm interested in using technology to address global issues"; 
    var two = "I'm a Systems Design Engineering student at the University of Waterloo and an aspiring developer. I'm interested in developing an interdisciplinary skillset"
    // var three = "improving our relationship with technology"; 
    var four = "I'm a Systems Design Engineering student at the University of Waterloo and an aspiring developer. I'm interested in producing strong responsive and interactive design"; 
    var five = "I'm a Systems Design Engineering student at the University of Waterloo and an aspiring developer. I'm interested in exploring the use of technology to develop holistic solutions"

    var text = [one, two, four, five]

    var typed = new Typed("#typed", {
        strings: text,
        typeSpeed: 20,
        backSpeed: 15,
        backDelay: 2500,
        startDelay: 1000,
        loop: true,
        showCursor: true,
        cursorChar: '_',
        autoInsertCss: true,
        smartBackspace: true,
      });
     
}); 

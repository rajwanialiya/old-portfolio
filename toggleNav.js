$(document).ready(() => {
    const nav = document.querySelector('.home');
    const close = document.querySelector('.close'); 

    const change = '<div class="new"><a class="returnHome" href="../index.html"><p>Home</p></a><a class="about" href=""><p>About</p></a><a class="resume" href=""><p>Resume</p></a><a class="getInTouch" href="mailto:rajwani.aliya@gmail.com"><p>Get In Touch</p></a></div>'

    $(nav).on("click", function(){
        $('.new').css('display', 'inline-flex');
        $('.projectTitle').css('visibility', 'hidden'); 
        $('.projectNav').css('visibility', 'hidden'); 
        // $('#sidebar').append(change); 
        $(nav).css('visibility', 'hidden'); 
        $(close).css('visibility', 'visible'); 
        $(close).css('z-index', '2'); 
        $('.darken').css('display', 'block'); 
    })

    $(close).on('click', function(){
        $('.new').css('display', 'none');
        $('.projectTitle').css('visibility', 'visible'); 
        $('.projectNav').css('visibility', 'visible'); 
        $(nav).css('visibility', 'visible'); 
        $(close).css('visibility', 'hidden'); 
        $('.darken').css('display', 'none'); 
    })
}); 



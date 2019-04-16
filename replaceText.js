$(document).ready(function(){ 
    var replace = document.getElementById('replace')

    //I am interested in...
    var one = "creating solutions to global issues with a holistic mindset"; 
    var two = "developing an interdisciplinary skillset"
    var three = "building solutions that strengthen our relationship with technology"; 
    var four = "developing strong responsive and interactive design"; 
    var five = "exploring the use of technology to ________"

    let i = 0; 

    var text = [one, two, three, four, five]; 

    const startReplace = function(){
       setInterval(replaceText, 2000); 
    }

    const replaceText = function(){
        replace.innerText = text[i]
        i++; 

        if (i >= text.length){
            i = 0; 
        } 
    console.log('here'); 
    }; 

    startReplace();
}); 

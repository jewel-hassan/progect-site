
// PORTFOLIO JQUERY
$(document).ready(function(){
    
var mixer= mixitup('.container');
});


// STACKY NAVBAR
     $(".js--services").waypoint(function(direction){
        if(direction === "down"){
            $("nav").addClass("stacky");
        }else{
            $("nav").removeClass("stacky");
        }
    
    });

    function openNav(){
        document.getElementById('mynav').style.width='100%';
    }
    function closeNav(){
        document.getElementById('mynav').style.width='0';
    }

    // SCROLL SMOOTH

    
    

var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');

for (var i = 0; i < navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();

        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
        
        var targetSectionCoordinates = targetSection.getBoundingClientRect();
        
        var smoothScroll = setInterval(function(){
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top <= 0){
                clearInterval(smoothScroll );
                return;
            }
            window.scrollBy(0,5);
        },10);
    });

}   


var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll',checkScroll);
var animationDone = false;


function initializeBars(){
    for (let bar of progressBars){ 
        bar.style.width = 0 + '%';
    }
}

initializeBars();

function fillBars(){
    for(let bar of progressBars){
        let targetWidth = bar.getAttribute("data-bar-width");
        let currentWidth = 0;
        let interval = setInterval(function(){
            if(currentWidth > targetWidth){
                clearInterval(interval);
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';

        },20);

    }
 
}

function checkScroll(){

    //you have to check whether skill cont is visible
    var coordinates = skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top < window.innerHeight){ //window.innerHeight will give you view port height 
        animationDone = true;
        console.log("skill section is visible")
        fillBars();

    }else if(coordinates.top > window.innerHeight){
        animationDone = false;
        initializeBars();
    }

}  

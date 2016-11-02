window.onload = function()
{   
 console.log("hello")

var puzzlearea = $('#puzzlearea')
var puzzlepieces = document.querySelectorAll ("#puzzlearea div");

var xpos=0;
var ypos=0;
//document.getElementById("overall").style.puzzlepieces.backgroundPosition = xpos * 100 + "px" + ypos -100 +"px";     

for (var i=0; i < puzzlepieces.length; i++) {
    
    puzzlepieces[i].setAttribute("class","puzzlepiece");
    puzzlepieces[i].style.left= xpos + 'px'; //get position of left puzzle piece
    puzzlepieces[i].style.top= ypos + 'px'; // get position of top puzzle piece
    puzzlepieces[i].style.backgroundPosition= xpos + "px " + ypos + "px";
    if (xpos <300) {
        xpos+=100;
    }
    else
    {
        xpos=0;
        ypos+=100;
    }
    }   
    
};





   
window.onload = function()
{   
 console.log("hello")

var puzzlearea = $('#puzzlearea')
var puzzlepieces = document.querySelectorAll ("#puzzlearea div");

var xpos=0;
var ypos=0;

for (var i=0; i < puzzlepieces.length; i++) {
    
    puzzlepieces[i].setAttribute("class","puzzlepiece");
    puzzlepieces[i].style.left= xpos + 'px';
    puzzlepieces[i].style.top= ypos + 'px';
    puzzlepieces[i].style.backgroundPosition= "_" +xpos + "px" + ypos + "px";
    if (xpos <300) {
        xpos+=100;
    }
    else
    {
        xpos=0;
        ypos+=100;
    }
    }   
            
}
   
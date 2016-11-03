var puzzlepieces = [];
var topspace= 300;
var leftspace = 300;
window.onload = function()
{   
 console.log("hello")

//var puzzlearea = $('#puzzlearea');
var puzzlepieces = document.querySelectorAll ("#puzzlearea div");


var xpos=0;
var ypos=0;
//document.getElementById("overall").style.puzzlepieces.backgroundPosition = xpos * 100 + "px" + ypos -100 +"px";     

for (var i=0; i < puzzlepieces.length; i++) {
    
    puzzlepieces[i].setAttribute("class","puzzlepiece");
    puzzlepieces[i].style.left= xpos + 'px'; //get position of left puzzle piece
    puzzlepieces[i].style.top= ypos + 'px'; // get position of top puzzle piece
    puzzlepieces[i].style.backgroundPosition= xpos *(-1) + "px " + (-1) * ypos + "px";
	
    if (xpos <300) {
        xpos+=100;
    }
    else
    {
        xpos=0;
        ypos+=100;
    }
}


var puzzleDiv = $("#puzzlearea div");
for (var i = 0; i < puzzlepieces.length; i++){	

			puzzleDiv[i].addEventListener('click', function move(){
			var left = parseInt(this.style.left);
			var topp = parseInt(this.style.top);
			var templ = leftspace;
			var tempt = topspace;
			if (topp == tempt - 100 && left == templ || topp == tempt  + 100 && left == templ ||  topp == tempt  && left == templ -100 ||  topp == tempt  && left == templ + 100 ){
				leftspace = left;
				topspace = topp;
				this.style.left= templ + "px";
				this.style.top= tempt + "px";
			}
	});
	
	
	
	document.getElementById('controls').onclick = function shuffle() {
		ranList = [];
		var ran = 0;
		var newpostop = 0;
		var newposleft = 0;
		var topspace = 300;
		var leftspace = 300;
		var gameStarted = true;
		while (ran !== 15){
			num = Math.floor(Math.random()*(puzzlepieces.length));
			if(ranList.indexOf(num) === -1) {
				ranList.push(num);
				console.log(ranList);
				console.log(ranList.length);
				ran++;
			}	
		}
		for ( i = 0; i < ranList.length; i++ ) {
			puzzlepieces[ranList[i]].style.top = newpostop + "px";
			puzzlepieces[ranList[i]].style.left = newposleft + "px";
			if( newposleft < 300) {
				newposleft = newposleft + 100;
			}
			else{
				newposleft = 0;
				newpostop = newpostop + 100;
			}
		}
	};
}	
	
	
	
	
	
	
	/*document.getElementById("shufflebutton").addEventListener('click', shuffle);
};

	//shuffle puzzle pieces
function shuffle(){
		moveable = [];
		
		
	for (var j = 0 ; j<250 ; j++){
		
		for (var i = 0; i < puzzlepieces.length; i++){
			
			var left = parseInt(puzzlepieces[i].style.left);
			var topp = parseInt(puzzlepieces[i].style.top);			
			if (topp == tempt - 100 && left == templ || topp == tempt  + 100 && left == templ ||  topp == tempt  && left == templ -100 ||  topp == tempt  && left == templ + 100 ){
				
				moveable.push(puzzlepieces[i]);					
			}
		}
			var k = Math.floor(Math.random() * moveable.length)
			
			var left = parseInt(moveable[i].style.left);
			var topp = parseInt(moveable[i].style.top);
			var templ = leftspace;
			var tempt = topspace;
			leftspace = left;
			topspace = topp;
			moveable[k].style.left= templ + "px";
			moveable[k].style.top= tempt + "px";	
		
		moveable = []
	}
		
		
		
}*/



}	
	
	
	
	






   
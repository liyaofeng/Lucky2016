var page1 = document.getElementById('page_1');
var page2 = document.getElementById('page_2');
var page3 = document.getElementById('page_3');

var music = document.getElementById('music');
var audio = document.getElementsByTagName('audio')[0];

music.addEventListener("touchstart", function() {
	if (audio.paused) {
		audio.play();
		this.childNodes[1].setAttribute("class", "music_disc music_play");
		// this.childNodes[1].style.animationPlayStatus = "running";
	}
	else {
		audio.pause();	
		this.childNodes[1].setAttribute("class", "music_disc");		
		// this.childNodes[1].style.animationPlayStatus = "paused";
	}
}, false);

audio.addEventListener("ended", function() {
	music.childNodes[1].setAttribute("class", "music_disc");
}, false);

page1.addEventListener("touchstart", function() {
	this.style.display = "none";
	page2.style.display = "block";
	setTimeout(function() {
		page2.setAttribute("class", "page feadout");
		page3.setAttribute("class", "page feadin");
	}, 5500);
}, false);
var tag;
var firstScriptTag;



// var hoverElem = null;
// $('*').hover(function() {
// 	hoverElem = this;
// 	console.log('found element');
// 	if ( this.hasOwnProperty('is') ) {
// 		console.log('responds to is');
// 		if ( this.is('a') ) {
// 			console.log('is a hyperlink');
// 			if ( this.href.indexOf("https://www.youtube.com/watch") === 0 ||
//     	 		this.href.indexOf("http://www.youtube.com/watch") === 0 ) {
//     	 	
// 				console.log("this is a youtube video");
// 				console.log(hoverElem.href);
// 			}
// 		}
// 	}
// });


//elem = document.getElementById('dialogdiv');
//console.log(elem);

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  console.log(window.myvar);
  	player = new YT.Player('player', {
    height: '390',
    //height: '450',
    width: '640',
    videoId: myvideoid,
    playerVars: { 'autoplay': 1, 'controls': 0 },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  player.mute();
  player.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
function onPlayerStateChange(event) {
  player.playVideo();
}
function stopVideo() {
  player.stopVideo();
}
$(document).ready(function () {
	
		
	$('body').prepend("<div id='YouTubePopup' style='pointer-events:none;height:0px'>Dialog Content</div>"); 
	
     //var dialogvar = $("#YouTubePopup").html("<iframe width='560' height='315' src='//www.youtube.com/embed/"+videoID+"' frameborder='0' allowfullscreen></iframe>").dialog({
     // var dialogvar = $("#YouTubePopup").load(url).dialog({
                    var dialogvar = $("#YouTubePopup").dialog({
                        height:390,
                        width:640,
                        dialogClass: "no-close",
                        autoOpen: false,
                        show: "blind"
                    });

	 
    
    $(document).mousemove(function (e) {
        dialogvar.dialog("option", { position: [e.pageX+20, e.pageY+225] });
    });

	
   
    $("a").bind("mouseover", function () {
    	if ( this.href.indexOf("https://www.youtube.com/watch") === 0 ||
    	 	 this.href.indexOf("http://www.youtube.com/watch")  === 0 ) {
            //chrome.runtime.sendMessage({type: "opendialog"});

            var vidlink = this.href;
            vidid = vidlink.substr(vidlink.indexOf("watch?v=")+8, 11);
    	 		
                    // dialogvar.html('<body style="margin:8px; display:block; min-height:450px; min-width:640px; background-color:red; pointer-events:none"> <div id="player"></div><script>var myvideoid = "'+vidid+'";window.myvar = myvideoid;console.log(myvideoid);</script><script src="chrome-extension://jplakpohanfhaaijkleofdgnldcmcckg/ytpopup.js"></script>');
                    //dialogvar.html('<body style="margin:8px; display:block; min-height:450px; min-width:640px; background-color:red; pointer-events:none"> <div id="player"></div><iframe width="640" height="390" src="//www.youtube.com/embed/'+vidid+'?autoplay=1" frameborder="0" allowfullscreen></iframe>');
            dialogvar.html('<body style="margin:8px; display:block; min-height:450px; min-width:645px; background-color:red; pointer-events:none"> <div id="ytplayer"></div> <embed id="ytplayer" width="640px" height="390px" allowscriptaccess="always" quality="high" bgcolor="#000000" name="ytplayer" style="" src="//www.youtube.com/embed/'+vidid+'?enablejsapi=1&version=3&playerapiid=ytplayer&autoplay=1&controls=1&autohide=0">');
            if ( dialogvar.dialog( "isOpen" )===false) {


    	 			// var string = this.href;
//     	 			string.replace("https://www.youtube.com/watch?v=", "");
//     	 			
     	 			// console.log("this");
//     	 			
//     	 			dialogvar.html('<iframe id="ytplayer" type="text/html" width="640" height="390" src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&muting=1" frameborder="0"/>');
        			//$('body').append("<div id='dialogDiv'>Dialog Div<div/>");
        			//dialogvar.html('<div id="player"></div><script type="text/javascript">var tag;var firstScriptTag;var tag = document.createElement("script");tag.src = "https://www.youtube.com/iframe_api";var firstScriptTag = document.getElementsByTagName("script")[0];firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);var player;function onYouTubeIframeAPIReady() {  	player = new YT.Player("player", {    height: "390",  width: "640",    videoId: "M7lc1UVf-VE",    playerVars: { "autoplay": 1, "controls": 0 },    events: {      "onReady": onPlayerReady,      "onStateChange": onPlayerStateChange    }  });}function onPlayerReady(event) {  player.mute();  player.playVideo();}function onPlayerStateChange(event) {  player.playVideo();}function stopVideo() {  player.stopVideo();}</script>');
    			setTimeout(dialogvar.dialog('open'), 50000); // open
        		
        			
        		
            }
        }
    	 	
    	 	
    	else if ( $(this).data("href") && (this.data-href.indexOf("https://www.youtube.com/watch") === 0 ||
                      this.data-href.indexOf("http://www.youtube.com/watch") === 0)) {
            var vidlink = this.data-href;
            vidid = vidlink.substr(vidlink.indexOf("watch?v=")+8, 11);
            dialogvar.html('<body style="margin:8px; display:block; min-height:450px; min-width:640px; background-color:red; pointer-events:none"> <div id="ytplayer"></div> <embed id="ytplayer" width="640px" height="390px" allowscriptaccess="always" quality="high" bgcolor="#000000" name="ytplayer" style="" src="//www.youtube.com/embed/'+vidid+'?enablejsapi=1&version=3&playerapiid=ytplayer&autoplay=1&controls=1&autohide=0>')

    	 	if ( dialogvar.dialog( "isOpen" )===false) {



        		setTimeout(dialogvar.dialog('open'), 50000); // open
        		
        		}
        }

        else if (this.href.indexOf("http://youtu.be/") === 0 ||
             this.href.indexOf("https://youtu.be/")  === 0 ) {
        
            var vidlink = this.href;
            vidid = vidlink.substr(vidlink.indexOf("youtu.be/")+9, 11);
            console.log(vidid);

            dialogvar.html('<body style="margin:8px; display:block; min-height:450px; min-width:640px; background-color:red; pointer-events:none"> <div id="ytplayer"></div> <embed id="ytplayer" width="640px" height="390px" allowscriptaccess="always" quality="high" bgcolor="#000000" name="ytplayer" style="" src="//www.youtube.com/embed/'+vidid+'?enablejsapi=1&version=3&playerapiid=ytplayer&autoplay=1&controls=1&autohide=0">');
            if ( dialogvar.dialog( "isOpen" )===false) {

                setTimeout(dialogvar.dialog('open'), 50000); // open
                
                    
                
            }
        }

        else {
            dialogvar.dialog('close');
        }
    });
    $("a").bind("mouseleave", function () {
        clearTimeout();
        dialogvar.html('<div></div>');
        dialogvar.dialog('close');
    });

    $("a").bind("click", function() {
        dialogvar.html('<div></div>');
        dialogvar.dialog('close'); 
    })
});
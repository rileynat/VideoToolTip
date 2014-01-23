$(document).ready(function () {
	
	var url = chrome.extension.getURL("ytpopup.html");
		
	$('body').append("<div id='YouTubePopup' style='pointer-events:none'>Dialog Content</div>"); 
	
	 var dialogvar = $("#YouTubePopup").load(url).dialog({
	 //var dialogvar = $("#YouTubePopup").dialog({
	 	height:390,
	 	width:640,
	 	dialogClass: "no-close",
        autoOpen: false,
        show: "blind"
    });
    
    $(document).mousemove(function (e) {
        dialogvar.dialog("option", { position: [e.pageX+20, e.pageY+10] });
    });

	
   
    $("a").bind("mouseover", function () {
    	if ( this.href.indexOf("https://www.youtube.com/watch") === 0 ||
    	 	this.href.indexOf("http://www.youtube.com/watch") === 0 ) {
    	 		if ( dialogvar.dialog( "isOpen" )===false) {
    	 		
    	 			// var string = this.href;
//     	 			string.replace("https://www.youtube.com/watch?v=", "");
//     	 			
//     	 			console.log(string);
//     	 			
//     	 			dialogvar.html('<iframe id="ytplayer" type="text/html" width="640" height="390" src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&muting=1" frameborder="0"/>');
        			dialogvar.html().("body").prepend('<div id="videoID"> This is a video id</div>');
        			dialogvar.dialog('open'); // open
        		
        			
        		
        		}
    	 	}
    	 	
    	 	
    	 else if ( this.data-href.indexOf("https://www.youtube.com/watch") === 0 ||
    	 	this.data-href.indexOf("http://www.youtube.com/watch") === 0) {
    	 	if ( dialogvar.dialog( "isOpen" )===false) {
        		dialogvar.dialog('open'); // open
        		
        		dialogvar.dialog('option', 'title', this.data-href);
        		
        	}
        }
    });
    $("a").bind("mouseleave", function () {
        dialogvar.dialog('close'); // open
    });
});
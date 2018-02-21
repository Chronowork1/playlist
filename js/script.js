// quick fix for Cloud9 warning:
/* global $ */

// Class 1:
// Customize the mySong variable with information about your favorite song.
// Complete displaySong function to append a single song to the list on the page.
// Make sure the displaySong function is called when the page loads.

// Class 2:
// Complete displayList function to append all the songs to the list on the page.
// Make sure the displayList function is called when the page loads.
// Complete clearList function to remove everything inside the list on the page (optional).

// Class 3:
// Complete the addSong function to:
//	  take inputs from the input boxes,
//    push the new song to the playlist array,
// 	  and display the new song in the list on the page.
// Make sure the addSong function is triggered when a user clicks the Add Song button.

//**************************** YOUR CODE BELOW *******************************
//*********** CHECK YOUR WORK EARLY AND OFTEN WITH console.log()!! ***********

// Data
	var mySong = {
		"title": "Don't Worry Be Happy",
		"artist": "Bobby McFerrin",
		"imageURL": "https://images-na.ssl-images-amazon.com/images/I/51cB3PoKceL._AC_US500_FMwebp_QL65_.jpg",
		"playURL": "https://open.spotify.com/track/4v52HuhZqVV0eNpP6vzH5I",
	}
	/*$("button").click(function(){
		var newSong = {
    		"title": $("#title").val(),
        	"artist": $("#artist").val(),
        	"playURL": $("#play-link").val(),
        	"imageURL": $("#album-image").val()
    	};
		
	}*/
	var myPlayList = [
	{
		"title": "Mozart's House",
		"artist": "Clean Bandit ft. Love Ssega",
		"imageURL": "https://i.scdn.co/image/f311bae0ebf733fb22e9569037cf44b68e641710",
		"playURL": "https://open.spotify.com/album/52okycllbZsjP4tKJ0goBA",
	},
	{
		"title": "Seven Nation Army",
		"artist": "White Stripes",
		"imageURL": "https://images-na.ssl-images-amazon.com/images/I/51yynBRMVbL._AC_US500_QL65_.jpg",
		"playURL": "https://open.spotify.com/album/4StIitBi8mj72prw8U4lod",
	},
	{
		"title": "Move Your Feet",
		"artist": "Junior Senior",
		"imageURL": "https://images-na.ssl-images-amazon.com/images/I/51hGF-ePp1L._AC_US500_FMwebp_QL65_.jpg",
		"playURL": "https://open.spotify.com/track/7cGfrVoC7G03XeXn7yflx5",
	}
	];
	
	
// DOCUMENT READY FUNCTION
$( document ).ready(function() {
	/*displayList(myPlayList);
	$("button").click(function() {
		clearList();
		addSong;
		$("#songInfo").html("");
		displayList(myPlayList);
	}*/
	// everything inside this function happens as soon as the page loads!
// displaySong uses the properties in the songObject to create an HTML element for a single song
//	  and appends the element to the playlist on the page
	function addSong(){
		$("#submit").click(function() {
    		var titleVal = $("#title").val();
    		var artistVal = $("#artist").val();
    		var playLink = $("#play-link").val();
    		var albumImage = $("#album-image").val();
    
			var newSong = {
    			"title": titleVal,
    			"artist": artistVal,
    			"playLink":playLink,
    			"albumImage":albumImage
    		};
    	//myPlayList.push(newSong);
    	$("#inputDiv").append(newSong);
		});
		
		$("#submit").click(function() {
			clearList();

		}


	function displaySong(songObject){
		$("body").html("<div id='songInfo'></div>");
		$("#songInfo").append("<img src=" + mySong.imageURL +" ></a>");
    	$("#songInfo").append("<h3>" + mySong.title + "</h3>");
    	$("#songInfo").append("<p>" + mySong.artist + "</p>");
    	$("#songInfo").append('<a href="' + mySong.playURL + '"> Play Song</a>');
	}

// d	isplayList takes in an array of song objects, and it uses the information from each song object
//    to create an HTML element and append it to the playlist on the page
	function displayList(songsArray){
		for (var i = 0; i < myPlayList.length; i++){
    		$('body').append(myPlayList[i].title);
    		$('body').append(myPlayList[i].artist);
    		$('body').append('<img src="'+myPlayList[i].imageURL+'">');
    		$('body').append('<a href="'+myPlayList[i].playURL+'"></a>'); 
    			displaySong(myPlayList[i]);
		}
	}
// clearList removes all the content from the playlist on the page
	function clearList(){
		$("#inputDiv").html("");
	}
// addSong takes inputs from the input boxes, organizes them into a new song object, and
// pushes a new song to the playlist array
	
});


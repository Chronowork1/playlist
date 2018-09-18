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

]
	
// DOCUMENT READY FUNCTION
$( document ).ready(function() {
  $("button").click(function() {
      clearList();
      addSong();
	  displayList(myPlayList);
  });
		

	function displaySong(songObject){
	  var songTitle = songObject["title"];
	  var songArtist = songObject["artist"];
	  var songImage = songObject["imageURL"];
	  var songURL = songObject["playURL"];
	  $("body").append('<div id="songInfo"></div>');
	  $("#songInfo").append("<div><img src=" + songImage + "></a></div>");
      $("#songInfo").append("<div><h3>" + songTitle + "</h3></div>");
      $("#songInfo").append("<div><p>" + songArtist + "</p></div>");
      $("#songInfo").append('<div><a href="' + songURL + '"> Play Song</a></div>');
	}
	

	function displayList(songsArray){
	  for (var i = 0; i < songsArray.length; i=i+1){
	  	displaySong(songsArray[i]);
	  }
	}
	
	function clearList(){
	  $("#songInfo").html(" ");
	}
	
   function addSong(){
	  var titleVal= $("#title").val();
	  var artistVal= $("#artist").val();
	  var linkVal= $("#play-link").val();
	  var albumImageVal= $("#album-image").val();
	  
	  var newSong= {
       "title": titleVal,
       "artist": artistVal,
       "playURL": linkVal,
       "imageURL": albumImageVal
	  };
	myPlayList.push(newSong);
	};
});
	



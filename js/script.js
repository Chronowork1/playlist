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

var myPlayList = [

];
	
// DOCUMENT READY FUNCTION
$( document ).ready(function() {
	//This piece of code when clicked returns the clearList function, addSong function and 
	//displayList with myPlayList as the input.
  $("button").click(function() {
      clearList();
      addSong();
	  displayList(myPlayList);
  });

    //3rd
	function displaySong(songObject){
	  var songTitle = songObject["title"];
	  var songArtist = songObject["artist"];
	  var songImage = songObject["imageURL"];
	  var songURL = songObject["playURL"];
	  $(".card").append('<div class="card-body" id="songInfo"></div>');
	  $("#songInfo").append('<img class="song-image img-thumbnail float-right" src=' + songImage+'>');
      $("#songInfo").append("<div class= 'card-body'><h3>" + songTitle + "</h3></div>");
      $("#songInfo").append("<div class = 'card-body'><p>" + songArtist + "</p></div>");
      $("#songInfo").append('<div class = "card-body"><a href="' + songURL + '"> Play Now</a></div>');
	}
	
	//2nd
	//Basically list all of the append.
	//songsArray loop through songObject and connect through displaySong.
	function displayList(songsArray){
	  for (var i = 0; i < songsArray.length; i++){
	  	displaySong(songsArray[i]);
	  }
	}
	
	//clear the songInfo div.
	function clearList(){
	  $("#songInfo").html(" ");
	}
	
	//1st
	//Takes the value from the input
	//Then push the value for the variables and push it to myPlayList.
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
	}
});
	



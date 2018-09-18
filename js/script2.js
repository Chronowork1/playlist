/*global*/

$(document).ready(function(){
 
  $("#submit").click(function(){
    addSong();
    displayList(myPlayList);
  )}
 
 function displaySong(songObject){
   $("body").append(<div id="songInfo"></div>);
 }
 
)};
   
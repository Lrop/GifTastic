var topics = ["Boats", "Planes", "Trains"];
var cutOffRating = "R";

function renderButtons(){
	for(var i = 0; i < topics.length; i++) {
		var newButton = $("<button>");
		newButton.addClass("btn");
		newButton.addClass("cartoon-button");
		newButton.text(topics[i]);
		$("#button-container").append(newButton);
	}
};
 
function getGif (){

var input = $('#cartoon-show').val();

var queryURL = $.get("http://api.giphy.com/v1/gifs/search?q="+ input +"&api_key=w1S2aIWlkRlLJu0hsXW7RjISiJS93vYU&limit=20");

queryURL.done(function(response) {


  console.log("success got data". response);

  var giphy = response.data;

  for ( i in giphy)
   {

    $('.inner').append("<img src='"+giphy[i].images.original.url+"'/>")
  }
});

console.log(response);
}

function addButton(show){
	if(topics.indexOf(show) === -1) {
		topics.push(show);
		$("#button-container").empty();
		renderButtons();
	}
}


$(document).ready(function(){
	renderButtons();
	$("#submit").on("click", function(){
		event.preventDefault();
		addButton($("#cartoon-show").val().trim());
    $("#cartoon-show").val("");
    
	});
});

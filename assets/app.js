var buttons = ["Boats", "Planes", "Trains"];
var gifRating = 'R';

function renderButtons(){
	for(var i = 0; i < buttons.length; i++) {
		var newButton = $("<button>");
		newButton.addClass("btn");
		newButton.addClass("cartoon-button");
		newButton.text(buttons[i]);
		$("#button-container").append(newButton);
	}
};
 
function getGif (){

var input = $('#gif-show').val();

var queryURL = $.get("http://api.giphy.com/v1/gifs/search?q="+ input +"&api_key=w1S2aIWlkRlLJu0hsXW7RjISiJS93vYU&rating=" + gifRating + "&limit=10");

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
	if(buttons.indexOf(show) === -1) {
		buttons.push(show);
		$("#button-container").empty();
		renderButtons();
	}
}


$(document).ready(function(){
	renderButtons();
	$("#submit").on("click", function(){
		event.preventDefault();
		addButton($("#gif-show").val().trim());
    $("#gif-show").val("");
    
	});
});



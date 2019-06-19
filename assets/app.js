var buttons = ["Planes", "Trains", "Automobiles", "Charpings", "Cacti", "PabstBlueRibbon"];

function getGif(){

  var input = $('#gif-show').val();

  var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ input +"&api_key=w1S2aIWlkRlLJu0hsXW7RjISiJS93vYU&limit=12";


  $.ajax({
    url: queryURL,
    method: "GET"
  })

  .then(function(response){

    var giphy = response.data;
    
    for ( i in giphy)
   {
    

    $('.inner').append("<img src='"+giphy[i].images.original.url+"'/>")

  }

  });

}
function renderButtons(){
	for(var i = 0; i < buttons.length; i++) {
		var newButton = $("<button>");
		newButton.addClass("btn");
		newButton.addClass("gif-button");
		newButton.text(buttons[i]);
		$("#button-container").append(newButton);
	}
};

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



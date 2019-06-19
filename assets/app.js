var buttons = ["Planes", "Trains", "Automobiles", "Charpings", "Cacti", "PabstBlueRibbon", "Beer", "RollerCoaster"];

function getGif(){

  var gif = $('#gif-show')
  //var input = $(this).attr("data-input");

  var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ gif +"&api_key=w1S2aIWlkRlLJu0hsXW7RjISiJS93vYU&limit=12";


  $.ajax({
    url: queryURL,
    method: "GET"
  })

  .then(function(response){

    var gif = response.data;
    
    for ( i in gif)
   {
    

    $('.inner').append("<img src='"+gif[i].images.original.url+"'/>")

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
    getGif();
		addButton($("#gif-show").val().trim());
    $("#gif-show").val("");
    
	});
});



var buttons = ["Planes", "Trains", "Automobiles", "Charpings", "Cacti", "PabstBlueRibbon", "Beer", "RollerCoaster"];

//<-------------------------------------------------------------->
function renderButtons(){
	for(var i = 0; i < buttons.length; i++) {
		var newButton = $("<button>");
		newButton.addClass("btn");
		newButton.addClass("gif-button");
		newButton.text(buttons[i]);
		$("#button-container").append(newButton);
	}
};
//<-------------------------------------------------------------->
function addButton(show){
	if(buttons.indexOf(show) === -1) {
		buttons.push(show);
		$("#button-container").empty();
    renderButtons();
    console.log(buttons);
	}
}

//<-------------------------------------------------------------->
$(document).ready(function(){
	renderButtons();
	$("#submit").on("click", function(){
		event.preventDefault();
		addButton($("#gif-show").val().trim());
    $("#gif-show").val("");
    
	});
});

function getGif(){
  
  //var input = $('#gif-show')
  let input = $(this).attr('btn-name');
  //var input = $('#gif-show').val();


  var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ input +"&api_key=w1S2aIWlkRlLJu0hsXW7RjISiJS93vYU&limit=8";

  $.ajax({
    url: queryURL,
    method: "GET"
  })

  .then(function(response){

    console.log(queryURL);
    var result = response.data;
    
    
   // for ( i in giphy)
   for ( let i = 0; i < result.length; i++) {
    
    let gifDiv = $('<div>');
    let p = $('<p>').text("Rating: " + result[i].rating);
    console.log(p);
    let pImg = $('<img>');
    pImg.attr("src", result[i].images.original.url);
    gifDiv.append(p);
    
  
    $('#gif-section').append("<img src='"+result[i].images.original.url+"'/>")
    $("#gif-section").append(gifDiv);
   
  }
  
  });

}






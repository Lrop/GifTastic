var animals = ["Lion", "Tiger", "Bear", "Sloth"];
  

// http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5
// GIPHY API KEY var api = w1S2aIWlkRlLJu0hsXW7RjISiJS93vYU;
// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayMovieInfo() {

  var animals = $(this).attr("data-name");
 
  var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=" + apiKeyBkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9 +"&tag=" + movie + "";

  // Creating an AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    console.log(response);

    // Creating a div to hold the movie
    var animalDiv = $("<div class='movie'>");

    // Storing the rating data
    var rating = response.Rated;

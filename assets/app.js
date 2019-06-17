
function getGif (){

var input = $('#search-text').val();

//var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=w1S2aIWlkRlLJu0hsXW7RjISiJS93vYU&limit=20");

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

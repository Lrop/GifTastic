var buttons = [];

//<-------------------------------------------------------------->
function renderButtons() {
  for (var i = 0; i < buttons.length; i++) {
    var newButton = $("<button>");
    //newButton.addClass("btn");
    newButton.addClass("data-input");
    newButton.text(buttons[i]);
    $("#button-container").append(newButton);
  }
}
//<-------------------------------------------------------------->
function addButton(show) {
  if (buttons.indexOf(show) === -1) {
    buttons.push(show);
    $("#button-container").empty();
    renderButtons();
    console.log(buttons);
  }
}

//<-------------------------------------------------------------->
$(document).ready(function() {
  renderButtons();
  $("#submit").on("click", function() {
    event.preventDefault();
    addButton(
      $("#gif-show")
        .val()
        .trim()
    );
    $("#gif-show").val("");
  });

  $(document).on("click", ".data-input", function(event) {
    console.log(event);
    console.log($(this));
    let buttonText = event.currentTarget.innerText;
    getGif(buttonText);
    console.log({ buttonText });
  });
});

function getGif(input) {
  //var input = $('#gif-show')
  //let input = $(this).attr('.btn-name');
  //var input = $('.data-input').attr('submit');
  // var input = $('.gif-show').attr('.data-input');

  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    input +
    "&api_key=w1S2aIWlkRlLJu0hsXW7RjISiJS93vYU&limit=8";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(queryURL);
    var result = response.data;

    // for ( i in giphy)
    for (let i = 0; i < result.length; i++) {
      let gifDiv = $("<div>");
      let p = $("<p>").text("Rating: " + result[i].rating);
      console.log(p);
      let pImg = $("<img>");

      pImg.attr("src", result[i].images.original.url);
      gifDiv.append(p);

      $("#gif-section").append(
        "<img src='" + result[i].images.original.url + "'/>"
      );
      $("#gif-section").append(gifDiv);
    }
  });

  function animateGifs() {
    let animate = $(this).attr("data-state");
    if (animate === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  }

  $(document).on("click", ".sport-btn", displayGif);
  $(document).on("click", ".still-images", animateGifs);
}

// $(document).on("click", ".data-input", getGif);
// $(document).on("click", ".data-input", getGif);

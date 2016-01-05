// This is what the data returning from IMDB will look like:

var sampleResult = {
  "Search": [
    {
      "Title": "Cool Runnings",
      "Type": "movie",
      "Year": "1993",
      "imdbID": "tt0106611"
    }
  ]
}

// Attach an event listener to the form submit (using jQuery)
$("#movie-search-form").submit(formSubmitted);

// Handle the form submission: go to OMDB and get results
function formSubmitted(event) {
  event.preventDefault();
  var url = "http://omdbapi.com/?s=" + $("#query").val();
  $.get(url, resultsReceived);
}

function resultsReceived(results) {
  console.log(results);
  debugger;
  // The array of movies lives inside results["Search"]
  // See the sampleResult above for an example

  // Access the array of movies:
  results["Search"]

  // Access the first movie title
  debugger
  results["Search"][0]["Title"]
  for (var i = 0; i < results["Search"].length; i++) {
    appendResultToDOM(results["Search"][i]["Title"],results["Search"][i]["Poster"],results["Search"][i]["Year"])
  }
}

function appendResultToDOM(title,poster,year){
  // $("#movies").append()
  // $("<li>").addClass("movie").appendTo("#movies")
  //     .append($("<div>").addClass("movie-title")
  //         .append("<a>").attr("href",poster).text(title)
  //             )
  //     .append($("<div>")).addClass("movie-release-date").text(year)
  //
  // $("<a>").attr("href",poster).text(title)
  // .append()
  var li = $("<li>").addClass("movie").appendTo("#movies")
  var titleResult = $("<div>").addClass("movie-title").append("<a>").attr("href",poster).text(title).appendTo(li)
  var releaseData = $("<div>").addClass("movie-release-date").text(year).appendTo(li)



  // <li class="movie">
  //   <div class="movie-title">
  //     <a href="http://www.imdb.com/title/tt0106611" target="_blank">
  //       Cool Runnings
  //     </a>
  //   </div>
  //   <div class="movie-release-date">1993</div>
  // </li
}


var submit = "http://www.omdbapi.com/?";

$(function(){

  $("#makeRequest").click(function(){
      var movie = $("#makeRequest").val();

    $.get('http://www.omdbapi.com/?t='+movie+'&plot=short&r=json', function(response) {
      console.log(JSON.stringify(response));
      // console.log(response.Title);

      $(".Title").text(response.Title);
      $(".Year").text(response.Year);
      $(".Rated").text(response.Rated);
      $(".RunTime").text(response.Runtime);

    } );
  });

});

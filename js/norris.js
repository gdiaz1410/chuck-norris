$(document).ready(function() {
  getJoke()

  $('#get-joke').on('click', function(e) {
    // check positioning and syntax
    var oldJoke = $('#featured-joke').text()
      // made new element li
    var li = $('<li></li>');
    li.text(oldJoke)
    li.appendTo('#previous-jokes');

    // Check placement
    // $.ajax({
    //   url: http://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe

    // })



    getJoke()

  })
});


function getJoke() {
  $.ajax({
      url: 'http://api.icndb.com/jokes/random/'
    })
    .done(function(data) {
      console.log(data);
      $('#featured-joke').text(data.value.joke)
    })
}

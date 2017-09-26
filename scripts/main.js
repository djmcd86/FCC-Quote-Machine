

jQuery(document).ready(function($) {
  $("#getVerse").on("click", function(){
    $.get("http://www.ourmanna.com/verses/api/js/?order=random", function(data) {
      $("#verse").html(data);
    });
  });
});




/*
//fadeIn example, also fadeOut
<div id="clickme">
  Click here
</div>
<img id="book" src="book.png" alt="" width="100" height="123">

// With the element initially hidden, we can show it slowly:
$( "#clickme" ).click(function() {
  $( "#book" ).fadeIn( "slow", function() {
    // Animation complete
  });
});

First Try:
  $(document).ready(function() {
    $("#getVerse").on("click", function(){
      $.getJSON("http://www.ourmanna.com/verses/api/get?format=text&order=random", function(json) {
        $(".verse").html(JSON.stringify(json));
      });
    });
});

*/

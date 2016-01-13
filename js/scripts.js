$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var name = $("input#name").val().toUpperCase();
    var address = $("input#address").val().toUpperCase();


    $(".name").text(name);
    $(".address").text(address);


    $("#story").show() ;
    event.preventDefault();


  });
  $("button#green").click(function() {
  $("body").removeClass();
  $("body").addClass("green-background");
});

$("button#yellow").click(function() {
  $("body").removeClass();
  $("body").addClass("yellow-background");
});
});

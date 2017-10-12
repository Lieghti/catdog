$(document).ready(function() {

  $("img#cat").click(function() {
    $("ul#meow").prepend("<li>Purrrr</li>");
  });

  $("img#dog").click(function() {
    $("ul#bark").prepend("<li>woooff</li>")
  });

  $("button#photo").click(function() {
    $("ul#meow").prepend("<li><img src=img/cat.jpg></li>");
    $("ul#meow").children("li").first().click(function(){
      $(this).remove();
    });
  });


});

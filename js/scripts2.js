
$(document).ready(function() {
  $(".box1").click(function(){
    $(".box2").slideToggle();
    $(".box1").click(function(){
      $(".box3").slideToggle();
      $(".box1").click(function(){
        $(".box4").slideToggle();
        $(".box1").click(function(){
          $(".box5").slideToggle();
          $(".box1").click(function(){
            $(".box6").slideToggle();
          })
        });
      });
    });
  });
});
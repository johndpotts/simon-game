
$(document).ready(function(){
  var beep1 = new Audio('audio/beep1.mp3');
  $('#green').click(function(){
    beep1.play();
    console.log("working");
  });
  var beep2 = new Audio('audio/beep2.mp3');
  $('#red').click(function(){
    beep2.play();
    console.log("working");
  });
  var beep3 = new Audio('audio/beep3.mp3');
  $('#yellow').click(function(){
    beep3.play();
    console.log("working");
  });
  var beep4 = new Audio('audio/beep4.mp3');
  $('#blue').click(function(){
    beep4.play();
    console.log("working");
  });

});

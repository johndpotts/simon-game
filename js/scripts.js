$(document).ready(function(){
var playerTouchesThisRound=[],
patternToMatch=[],
round=(patternToMatch.length+1),
colorObject=["green","red","yellow","blue"];
var beep1 = new Audio('audio/beep1.mp3');
var beep2 = new Audio('audio/beep2.mp3');
var beep3 = new Audio('audio/beep3.mp3');
var beep4 = new Audio('audio/beep4.mp3');





var nextRound = function(){
var nextColor = colorObject[Math.floor(Math.random()*4+1)];
if (nextColor=="green")
{patternToMatch.push("green");}
if (nextColor=="red")
{patternToMatch.push("red");}
if (nextColor=="yellow")
{patternToMatch.push("yellow");}
if (nextColor=="blue")
{patternToMatch.push("blue");}
};



var didTheyLose = function(sequence){
for (i=0;i<sequence.length;i++){
  if (sequence[i] != patternToMatch[i])
  {}   //TODO
}
if (sequence.length == patternToMatch.length)
{}    //TODO
};

//var playerTurn = function(){
  $('#green').click(function(){
  lightup('green')
beep1.currentTime = 0;
    beep1.play();
    console.log("working");
    playerTouchesThisRound.push("green");
  });
  $('#red').click(function(){
lightup('red')
    beep2.currentTime = 0;
    beep2.play();
    console.log("working");
    playerTouchesThisRound.push("red");
  });
  $('#yellow').click(function(){
lightup('yellow');
beep3.currentTime = 0;
    beep3.play();
    console.log("working");
    playerTouchesThisRound.push("yellow");
  });
  $('#blue').click(function(){
lightup('blue');
    beep4.currentTime = 0;
    beep4.play();
    console.log("working");
    playerTouchesThisRound.push("blue");
  });
//};

var lightup = function(tile) {
 $('#'+tile).addClass('flash'+tile);
 window.setTimeout(function() {
 $('#'+tile).removeClass('flash'+tile);
 }, 300);

}


});

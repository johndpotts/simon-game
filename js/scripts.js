$(document).ready(function(){
var playerTouchesThisRound=[],
patternToMatch=[],
round=(patternToMatch.length+1),
colorObject=["green","red","yellow","blue"];
var beep1 = new Audio('audio/beep1.mp3');
var beep2 = new Audio('audio/beep2.mp3');
var beep3 = new Audio('audio/beep3.mp3');
var beep4 = new Audio('audio/beep4.mp3');
var endbuzzer = new Audio('audio/endbuzzer.mp3');





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

var showPattern = function(sequence){
for (i=0;i<sequence.length;i++){
  if (sequence[i]="green"){
    beep1.play();
    lightup('green');
  }
  else if (sequence[i]="red"){
    beep2.play();
    lightup('red');
  }
  else if (sequence[i]="yellow"){
    beep3.play();
    lightup('yellow');
  }
  else if (sequence[i]="blue"){
    beep4.play();
    lightup('blue');
  }
}
};


var didTheyLose = function(sequence){
for (i=0;i<sequence.length;i++){
  if (sequence[i] != patternToMatch[i])
  {endbuzzer.play()}   //TODO
}
if (sequence.length == patternToMatch.length)
{nextRound();
showPattern(patternToMatch);}
};

var playerTurn = function(){
  $('#green').click(function(){
  lightup('green')
beep1.currentTime = 0;
    beep1.play();
    console.log(playerTouchesThisRound);
    playerTouchesThisRound.push("green");
    didTheyLose(playerTouchesThisRound);
  });
  $('#red').click(function(){
lightup('red')
    beep2.currentTime = 0;
    beep2.play();
    console.log(playerTouchesThisRound);
    playerTouchesThisRound.push("red");
    didTheyLose(playerTouchesThisRound);
  });
  $('#yellow').click(function(){
lightup('yellow');
beep3.currentTime = 0;
    beep3.play();
    console.log(playerTouchesThisRound);
    playerTouchesThisRound.push("yellow");
    didTheyLose(playerTouchesThisRound);
  });
  $('#blue').click(function(){
lightup('blue');
    beep4.currentTime = 0;
    beep4.play();
    console.log(playerTouchesThisRound);
    playerTouchesThisRound.push("blue");
    didTheyLose(playerTouchesThisRound);
  });
};

var lightup = function(tile) {
 $('#'+tile).addClass('flash'+tile);
 window.setTimeout(function() {
 $('#'+tile).removeClass('flash'+tile);
 }, 300);

}


});

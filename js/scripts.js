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

var didTheyLose = function(thesequence){
for (i=0;i<thesequence.length;i++){
  if (thesequence[i] != patternToMatch[i])
  {
console.log(thesequence[i]);
console.log(patternToMatch[i]);
    console.log("it's over because"+playerTouchesThisRound+"is not equal to"+patternToMatch);

    endbuzzer.play()}   //TODO
}
if (thesequence.length == patternToMatch.length)
{nextRound();}
};

var playerTurn = function(){
var countit = 1
console.log("at the start of player turn it's"+playerTouchesThisRound);
console.log(countit)
countit ++
  $('#green').unbind("click").click(function(){
  lightUp('green')
beep1.currentTime = 0;
    beep1.play();
    playerTouchesThisRound.push("green");
    console.log(playerTouchesThisRound);
    didTheyLose(playerTouchesThisRound);
  });
  $('#red').unbind("click").click(function(){
lightUp('red')
    beep2.currentTime = 0;
    beep2.play();
    playerTouchesThisRound.push("red");
    console.log(playerTouchesThisRound);
    didTheyLose(playerTouchesThisRound);
  });
  $('#yellow').unbind("click").click(function(){
lightUp('yellow');
beep3.currentTime = 0;
    beep3.play();
    playerTouchesThisRound.push("yellow");
    console.log(playerTouchesThisRound);
    didTheyLose(playerTouchesThisRound);
  });
  $('#blue').unbind("click").click(function(){
lightUp('blue');
    beep4.currentTime = 0;
    beep4.play();
    playerTouchesThisRound.push("blue");
    console.log(playerTouchesThisRound);
    didTheyLose(playerTouchesThisRound);
  });
};

var lightUp = function(tile) {
 $('#'+tile).addClass('flash'+tile);
 window.setTimeout(function() {
 $('#'+tile).removeClass('flash'+tile);
 }, 300);

};
var playSound= function(color){
  if (color="green"){
    beep1.play();
  }
  else if (color="red"){
    beep2.play();
  }
  else if (color="yellow"){
    beep3.play();
    lightUp('yellow');
  }
  else if (color="blue"){
    beep4.play();
  }
};

var showPattern = function(sequence) {
 var i = 0;
 var interval = setInterval(function() {
playSound(sequence[i]);
 lightUp(sequence[i]);

        i++;
        if (i >= sequence.length) {
 clearInterval(interval);
        }
   }, 600);
   playerTouchesThisRound =[];
   console.log("ok now it's" + playerTouchesThisRound);
   playerTurn();
}


var nextRound = function(){
var nextColor = colorObject[Math.floor(Math.random()*4)];
if (nextColor=="green")
{patternToMatch.push("green");}
if (nextColor=="red")
{patternToMatch.push("red");}
if (nextColor=="yellow")
{patternToMatch.push("yellow");}
if (nextColor=="blue")
{patternToMatch.push("blue");}
showPattern(patternToMatch);
};

nextRound();















});

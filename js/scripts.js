$(document).ready(function(){
var playerTouchesThisRound=[],
patternToMatch=[],
round=0,
colorObject=["green","red","yellow","blue"];
var beep1 = new Audio('audio/beep1.mp3');
var beep2 = new Audio('audio/beep2.mp3');
var beep3 = new Audio('audio/beep3.mp3');
var beep4 = new Audio('audio/beep4.mp3');
var endbuzzer = new Audio('audio/endbuzzer.mp3');
var active = {"status":false};

var didTheyLose = function(thesequence){
for (i=0;i<thesequence.length;i++){
  if (thesequence[i] != patternToMatch[i])
  {
console.log(thesequence);
    endbuzzer.play()}   //TODO
}
if (thesequence.length == patternToMatch.length)
{active.status = false;
  nextRound();}
};

var playerTurn = function(){
  $('#green').unbind("click").click(function(){
  lightUp('green')
beep1.currentTime = 0;
    beep1.play();
    playerTouchesThisRound.push("green");
    didTheyLose(playerTouchesThisRound);
  });
  $('#red').unbind("click").click(function(){
lightUp('red')
    beep2.currentTime = 0;
    beep2.play();
    playerTouchesThisRound.push("red");
    didTheyLose(playerTouchesThisRound);
  });
  $('#yellow').unbind("click").click(function(){
lightUp('yellow');
beep3.currentTime = 0;
    beep3.play();
    playerTouchesThisRound.push("yellow");
    didTheyLose(playerTouchesThisRound);
  });
  $('#blue').unbind("click").click(function(){
lightUp('blue');
    beep4.currentTime = 0;
    beep4.play();
    playerTouchesThisRound.push("blue");
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
beep1.pause();
  beep1.currentTime = 0;
  beep2.pause();
  beep2.currentTime = 0;
  beep3.pause();
  beep3.currentTime = 0;
  beep4.pause();
  beep4.currentTime = 0;
  if (color=="green"){
    beep1.play();
  }
  else if (color=="red"){
    beep2.play();
  }
  else if (color=="yellow"){
    beep3.play();
  }
  else if (color=="blue"){
    beep4.play();
  }
};

var showPattern = function(sequence) {
$("#green").unbind();
$("#yellow").unbind();
$("#red").unbind();
$("#blue").unbind();

setTimeout(function() {
round ++;
 $('.title').html("Round "+round);
 }, 600);
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
   wait = (round+1) * 600
   console.log(wait);
   setTimeout(function(){ playerTurn();},wait);
};


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

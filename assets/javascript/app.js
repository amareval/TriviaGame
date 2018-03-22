// Want to have playey number equal a function of adding all the morty images being clicked

var playerNumber = 0;

//Run when page loads

$(document).ready(function(){

//Add the score counter into the "score" div
var wins = 0;
var losses = 0;



//A function to start the game and eventually call back when we need to reset

function startGame(){
//Add that number into the number to match
 computerNumber = Math.floor(Math.random() * 120 + 19);
$(".computerNumber").html(computerNumber);

$(".score").html("Wins: " + wins + "<br>" + "Losses: " + losses);
playerNumber = 0;
};
//Function to start the game with the above code
startGame();

// Next step is to define the buttons as random number generators at the beginning of the game

function assignNumbers(){
 rick1 = Math.floor(Math.random() * 12 + 1);
 rick2 = Math.floor(Math.random() * 12 + 1);
 rick3 = Math.floor(Math.random() * 12 + 1);
 rick4 = Math.floor(Math.random() * 12 + 1);

return [rick1 , rick2, rick3, rick4];
};
//Assign function value to variable
 var rickNumbers = assignNumbers();

console.log(rickNumbers);

//Now we add to the playerNumber amount when we click on an image.

$('.rick1').on('click', function() {
    playerNumber = (playerNumber + rickNumbers[0]);
    console.log(playerNumber);
    console.log(rickNumbers[0])
})
$('.rick2').on('click', function() {
    playerNumber = (playerNumber + rickNumbers[1]);
})
$('.rick3').on('click', function() {
    playerNumber = (playerNumber + rickNumbers[2]);
})
$('.rick4').on('click', function() {
    playerNumber = (playerNumber + rickNumbers[3]);
})

// Inputting the player number into the div

$('.pic').on('click', function(){
$('.yourNumber').text(playerNumber);
});

//Now want to compare with if statements when the player loses or wins. Also add a reset button



$('.rick').on('click', function(){
    
if (playerNumber == computerNumber){
    wins++
    startGame();
    assignNumbers();
    rickNumbers = assignNumbers();
    console.log(rickNumbers);
}
else if (playerNumber > computerNumber){
    losses++
    startGame();
    assignNumbers();
    rickNumbers = assignNumbers();
    console.log(rickNumbers);
}
});

});



//Add all numbers in an array, possible?

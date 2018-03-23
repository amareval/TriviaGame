//define the timer and variables that will remain constant. Question, timer, and multiple choice

var timer = 31;
var intervalId;

var questions = {

    question1: "Wanna know how I got these scars?",
    question2: "King Kong aint got shit on me!",
    question3: "Are you not entertained!",
    question4: "My precious"

};


var multipleC;

decrement()


function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

//Set the timer to start decrementing (Function 1)
function decrement() {

    timer--;

    $("#show-timer").addClass("text-center btn-warning w-100");
    $("#show-timer").html("<h2>" + timer + "</h2>");
    

    };

    run();



//Show the question (function 2)

//Show the multiple choice answers for that question (Function 3)

//If the answer is correct, show the gif and say correct

//if the answer is incorrect, show the gif and say incorrect

//If the timer hits 0 then show "out of time", show gif

//Once all the above run, then restart automatically after 5 seconds

//Add the next question, add the next multiple choice set
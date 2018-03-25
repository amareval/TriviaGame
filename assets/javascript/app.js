//** to clear to the gifs or answers, then you use ".empty"

//define the timer and variables that will remain constant. Question, timer, and multiple choice

var timer = 31;
var intervalId;

//Insert the questions and answers into one object, also can possibly add a true value to the correct answer to reference
//questions[0].text;  //To reference the first question
//questions[0].answers[0]; //To refernce the first answer for the first question

var questions = [
    {
        text: 'Want to know how I got these scars?',
        answers: [
            {
             answer: 'The Dark Knight',
             correct: true
            },
            {
             answer: 'BraveHeart',
             correct: false
            },
            {
             answer: 'The Matrix',
             correct: false
            },
            {
            answer: 'Transformers',
            correct: false
            },
        ]
    },
    {
        text: 'King Kong aint got shit on me!',  
        answers2: [
            {
            answer: 'Friday',
            correct: false
            },
            {
            answer: 'Malibus Most Wanted',
            correct: true
            },
            {
             answer: 'King Kong',
             correct: false
            },
            {
             answer: 'Role Models',
             correct: false
            },
        ]
    },
    {
        text: 'Are you not entertained!',  
        answers3: [
            {
            answer: 'Transformers',
            correct: false

            },
            {
            answer: 'Rick and Morty',
            correct: false

            },
            {
             answer: 'Godfather',
             correct: false

            },
            {
             answer: 'Gladiator',
             correct: true

            },
        ]
    },
    {
        text: 'My Precious',
        answers4: [
            {
            answer: 'Lord of the Rings',
            correct: true
            },
            {
            answer: 'Hunger Games',
            correct: false
            },
            {
             answer: 'The Hobbit',
             correct: false
            },
            {
             answer: '10,000 B.C.',
             correct: false
            },
        ]
    }
]

console.log(questions)
console.log(questions[0].text)
console.log(questions[1].text)
console.log(questions[0].answers[0])
console.log(questions[0].answers[1].answer)
console.log(questions.length)



//Insert the questions and answers into one object, also can possibly add a true value to the correct answer to reference
// var questions = [
// //     {
// //     question1: "Wanna know how I got these scars?",
// //     answers: [
// //         {
// //             a1: "The Dark Knight",
// //             a2: "BraveHeart",
// //             a3: "Dark Knight Rises",
// //             a4: "The Matrix"
// //         }
// //             ]  

// //     question2: "King Kong aint got shit on me!",
// //     question3: "Are you not entertained!",
// //     question4: "My precious"

// }];




//The run functions sets an interval, clearing the intervalID prior to our new interval will not allow multiple instances
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

//Set the timer to start decrementing (Function 1)
function decrement() {


    timer--;

    $("#show-timer").addClass("text-center btn-warning w-100");
    $("#show-timer").html("<h2>" + timer + "</h2>");
    
    if (timer === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        // alert("Time Up!");
         timer = 31;

        reset()
      }

    };

    //  The stop function
    function stop() {

        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
      }

      //Create a function to wait 5 seconds and reset the timer and runs the decerement function again
      function reset (){
          setTimeout(function() { decrement();run();setup() }, 5000);
          setTimeout();
          run();

      };

      //Setting up the set up for the questions and answers to be chosen.
      function setup() {

          $(".Question").html(questions[0].text)

          for (var i = 0; i < questions.length; i++) {

            
            $(".Answer" + [i]).html(questions[0].answers[i].answer);


              console.log(questions[0].answers[i].answer);
          }
          
        

      }

      //Create a function that provides the questions and answers

    decrement()

    run();

    setup();





//If the answer is correct, show the gif and say correct

//if the answer is incorrect, show the gif and say incorrect

//If the timer hits 0 then show "out of time", show gif

//Once all the above run, then restart automatically after 5 seconds

//Add the next question, add the next multiple choice set
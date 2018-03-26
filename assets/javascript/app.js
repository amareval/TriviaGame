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
        answers: [
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
        answers: [
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
        answers: [
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

// console.log(questions)
// console.log(questions[0].text)
// console.log(questions[1].text)
// console.log(questions[0].answers[0])
// console.log(questions[0].answers[1].answer)
// console.log(questions.length)



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


    $('.Answer0').on('click', function() {
        if ((questions[0].answers[0].correct) === true) {
            console.log("correct")
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light replaceImage'> Correct! </h2> " );
            $('.replaceImage').append("<div><iframe src='https://giphy.com/embed/iEvCfUnribre8' width='100%' height='100%' style= frameBorder='0' class='giphy-embed' allowFullScreen></iframe></div><p><a href='https://giphy.com/gifs/night-hi-joker-iEvCfUnribre8'></a></p></div>");
            //  ...run the stop function.
            stop();
            //  Alert the user that time is up.
            // alert("Time Up!");
            timer = 31;
            reset()

        }
        else{
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light replaceImage'> Incorrect! </h2> " );
            //Need to add the gif for when its wrong and the second choice is true.
            $('.replaceImage').append("<div><iframe src='https://giphy.com/embed/iEvCfUnribre8' width='100%' height='100%' style= frameBorder='0' class='giphy-embed' allowFullScreen></iframe></div><p><a href='https://giphy.com/gifs/night-hi-joker-iEvCfUnribre8'></a></p></div>");
        }
    });

    $('.Answer1').on('click', function(){
        if ((questions[0].answers[1].correct) === true) {
            console.log("correct")
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light'> Correct! </h2>" );

        }
        else {
            console.log('meow')
        }
    });
    $('.Answer2').on('click', function(){
        if ((questions[0].answers[2].correct) === true) {
            console.log("correct")
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light'> Correct! </h2>" );

        }
        else{
            console.log('meow')
        }
    });
    $('.Answer3').on('click', function(){
        if ((questions[0].answers[3].correct) === true) {
            console.log("correct")
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light'> Correct! </h2>" );

        } 
        else{
            console.log('meow')
        }
    });        

   
     // If the choice is correct or incorrect we take the following actions. 
     //How do we define a button as a variable with the value of true
//      for (var i = 0; i < 4; i++) {
// $('.Answer'+ [i]).on('click',function(){

//     //Set each choice as a variable and define if it is correct or not. These values return true or false
//     var choice = [questions[0].answers[0].correct, questions[0].answers[1].correct, questions[0].answers[2].correct , questions[0].answers[3].correct]

//     for (var k = 0; k < 4; k++) {
    
//     if ((questions[0].answers[k].correct) === true ){
//         console.log('correct!')
//         break;

//     }
//     else{
//         console.log('incorrect')
//     }
// }
// })
// };

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
      //Also need to figure out how to loop through questions.
      function setup() {

          $(".Question").html(questions[0].text)

          for (var i = 0; i < questions.length; i++) {

            
            $(".Answer" + [i]).html(questions[0].answers[i].answer);


              console.log(questions[0].answers[i].answer);
          }
          
        
// //When we answer the question correctly, this sets back all the divs and classes for the rest of the function.
// $('.replaceImage').replaceWith("<div id = 'replaceImage'> <h3 class ='Question btn-light text-center'>QUESTION!</h3><div class='Answer0 btn-light multiple text-center'> answer 1</div><br><div class='Answer1 btn-light multiple text-center'>answer 2</div><br><div class='Answer2 btn-light multiple text-center'>answer 3</div><br><div class='Answer3 btn-light multiple text-center'>answer 4</div><br></div>")

//Primary problems
//#1: wrong answer does not generate the incorrect message
//#2: how do you reset the divs and everything that needs to be recalled
//#3: how do you loop through questions effectively
//#4: When my timer runs out and it tries to reset I get the error message in console. What does this mean?
//#5: Find every place with questions[0] and find a way to loop on correct answer (can possibly have a success variable)


      }


    decrement()

    run();

    setup();





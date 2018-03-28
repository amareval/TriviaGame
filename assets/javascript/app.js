//** to clear to the gifs or answers, then you use ".empty"

//define the timer and variables that will remain constant. Question, timer, and multiple choice

var timer = 31;
var intervalId;
var counter = 0;

//Insert the questions and answers into one object, also can possibly add a true value to the correct answer to reference
//questions[0].text;  //To reference the first question
//questions[0].answers[0]; //To refernce the first answer for the first question
var winner = 'giphy-dance.gif'
var questions = [
    {
        text: 'Want to know how I got these scars?',
        gif: 'giphy-downsized.gif',
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
        gif: 'giphy-malibu.gif',
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
        gif: "giphy-gladiator.gif",
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
        gif: "giphy-lotr.gif",
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
        counter = 0;

      }

    };


    //Look into possibly getting the button clicks to use the "this" so that they pull the text
    // $('.multiple').on('click', function(){
    // console.log($(this))
    // });
   


    //  The stop function
    function stop() {

        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
      }

      //Create a function to wait 5 seconds and reset the timer and runs the decerement function again
      function reset (){

        counter++

          setTimeout(function() { resetdiv();decrement();run();setup();clicks() }, 5000);
          console.log(counter);
      };

      function resetdiv(){
        $('.replaceImage').replaceWith("<div id = 'replaceImage'> <h3 class ='Question btn-light text-center'>QUESTION!</h3><div class='Answer0 btn-light multiple text-center'> answer 1</div><br><div class='Answer1 btn-light multiple text-center'>answer 2</div><br><div class='Answer2 btn-light multiple text-center'>answer 3</div><br><div class='Answer3 btn-light multiple text-center'>answer 4</div><br></div>")
      };
      

      //Setting up the set up for the questions and answers to be chosen. 
      //Also need to figure out how to loop through questions.
      function setup() {

        if(counter === 0){

          $(".Question").html(questions[0].text)

          for (var i = 0; i < questions.length; i++) {

            
            $(".Answer" + [i]).html(questions[0].answers[i].answer);


              console.log(questions[0].answers[i].answer);
          }
        }
        else if (counter === 1){
            $(".Question").html(questions[1].text)

          for (var i = 0; i < questions.length; i++) {

            
            $(".Answer" + [i]).html(questions[1].answers[i].answer);


              console.log(questions[1].answers[i].answer);
          }
        }
        else if (counter === 2){
            $(".Question").html(questions[2].text)

          for (var i = 0; i < questions.length; i++) {

            
            $(".Answer" + [i]).html(questions[2].answers[i].answer);


              console.log(questions[2].answers[i].answer);
          }
        }
        else if (counter === 3){
            $(".Question").html(questions[3].text)

          for (var i = 0; i < questions.length; i++) {

            
            $(".Answer" + [i]).html(questions[3].answers[i].answer);


              console.log(questions[3].answers[i].answer);
          }
        }
        else {
            $(".Question").html("YOU WON THE GAME");
            $('#replaceImage').replaceWith("<div><img src = '" + winner + "' alt='Super Cool'></div>");
            

        }


        }

        //I fucked this up and didn't know that $(this) would have captured the button click. SO, I have resorted to actually creating if statements for every single button scenario...
//I can also try recoding this.
function clicks(){
if(counter === 0){
    $('.Answer0').on('click', function() {
        if ((questions[0].answers[0].correct) === true) {
            console.log("correct")
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light replaceImage'> Correct! </h2> " );
            $('.replaceImage').append("<div><img src = '" + questions[0].gif + "' alt='Super Cool'></div>"); 
            //  ...run the stop function.
            stop();
            //  Alert the user that time is up.
            // alert("Time Up!");
            timer = 31;
            reset()

        }
        else if ((questions[0].answers[0].correct) === false){
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light replaceImage'> Incorrect! </h2> " );
            $('.replaceImage').append("<div><img src = '" + questions[0].gif + "' alt='Super Cool'></div>"); 
        }
    });

    $('.Answer1').on('click', function(){
        if ((questions[0].answers[1].correct) === true) {
            console.log("correct")
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light'> Correct! </h2>" );
            $('.replaceImage').append("<div><img src = '" + questions[0].gif + "' alt='Super Cool'></div>"); 


        }
        else if ((questions[0].answers[1].correct) === false){
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light replaceImage'> Incorrect! </h2> " );
            $('.replaceImage').append("<div><img src = '" + questions[0].gif + "' alt='Super Cool'></div>"); 
            stop();
            //  Alert the user that time is up.
            // alert("Time Up!");
            timer = 31;
            reset()

        }
    });
    $('.Answer2').on('click', function(){
        if ((questions[0].answers[2].correct) === true) {
            console.log("correct")
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light'> Correct! </h2>" );
            $('.replaceImage').append("<div><img src = '" + questions[0].gif + "' alt='Super Cool'></div>"); 


        }
        else if ((questions[0].answers[2].correct) === false){
            console.log('meow')
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light replaceImage'> Incorrect! </h2> " );
            $('.replaceImage').append("<div><img src = '" + questions[0].gif + "' alt='Super Cool'></div>"); 

        }
    });
    $('.Answer3').on('click', function(){
        if ((questions[0].answers[3].correct) === true) {
            console.log("correct")
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light'> Correct! </h2>" );
            $('.replaceImage').append("<div><img src = '" + questions[0].gif + "' alt='Super Cool'></div>"); 


        } 
        else if ((questions[0].answers[3].correct) === false){
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light replaceImage'> Incorrect! </h2> " );
            $('.replaceImage').append("<div><img src = '" + questions[0].gif + "' alt='Super Cool'></div>"); 

            console.log('meow')
        }
    });        
}
if(counter === 1){
    $('.Answer0').on('click', function() {
        if ((questions[1].answers[0].correct) === true) {
            console.log("correct")
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light replaceImage'> Correct! </h2> " );
            $('.replaceImage').append("<div><img src = '" + questions[1].gif + "' alt='Super Cool'></div>"); 
            //  ...run the stop function.
            stop();
            //  Alert the user that time is up.
            // alert("Time Up!");
            timer = 31;
            reset()

        }
        else if ((questions[1].answers[0].correct) === false){
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light replaceImage'> Incorrect! </h2> " );
            $('.replaceImage').append("<div><img src = '" + questions[1].gif + "' alt='Super Cool'></div>"); 
             //  ...run the stop function.
             stop();
             //  Alert the user that time is up.
             // alert("Time Up!");
             timer = 31;
             reset()
        }
    });

    $('.Answer1').on('click', function(){
        if ((questions[1].answers[1].correct) === true) {
            console.log("correct")
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light replaceImage'> Correct! </h2> " );
            $('.replaceImage').append("<div><img src = '" + questions[1].gif + "' alt='Super Cool'></div>"); 
             //  ...run the stop function.
             stop();
             //  Alert the user that time is up.
             // alert("Time Up!");
             timer = 31;
             reset()


        }
        else if ((questions[1].answers[1].correct) === false){
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light replaceImage'> Incorrect! </h2> " );
            $('.replaceImage').append("<div><img src = '" + questions[1].gif + "' alt='Super Cool'></div>"); 
            stop();
            //  Alert the user that time is up.
            // alert("Time Up!");
            timer = 31;
            reset()

        }
    });
    $('.Answer2').on('click', function(){
        if ((questions[1].answers[2].correct) === true) {
            console.log("correct")
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light'> Correct! </h2>" );
            $('.replaceImage').append("<div><img src = '" + questions[1].gif + "' alt='Super Cool'></div>");
             //  ...run the stop function.
             stop();
             //  Alert the user that time is up.
             // alert("Time Up!");
             timer = 31;
             reset()


        }
        else if ((questions[1].answers[2].correct) === false){
            console.log('meow')
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light replaceImage'> Incorrect! </h2> " );
            $('.replaceImage').append("<div><img src = '" + questions[1].gif + "' alt='Super Cool'></div>"); 
             //  ...run the stop function.
             stop();
             //  Alert the user that time is up.
             // alert("Time Up!");
             timer = 31;
             reset()

        }
    });
    $('.Answer3').on('click', function(){
        if ((questions[1].answers[3].correct) === true) {
            console.log("correct")
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light'> Correct! </h2>" );
            $('.replaceImage').append("<div><img src = '" + questions[1].gif + "' alt='Super Cool'></div>"); 
             //  ...run the stop function.
             stop();
             //  Alert the user that time is up.
             // alert("Time Up!");
             timer = 31;
             reset()


        } 
        else if ((questions[1].answers[3].correct) === false){
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light replaceImage'> Incorrect! </h2> " );
            $('.replaceImage').append("<div><img src = '" + questions[1].gif + "' alt='Super Cool'></div>"); 
             //  ...run the stop function.
             stop();
             //  Alert the user that time is up.
             // alert("Time Up!");
             timer = 31;
             reset()

            console.log('meow')
        }
    });        
}
if(counter === 2){
    $('.Answer0').on('click', function() {
        if ((questions[2].answers[0].correct) === true) {
            console.log("correct")
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light replaceImage'> Correct! </h2> " );
            $('.replaceImage').append("<div><img src = '" + questions[2].gif + "' alt='Super Cool'></div>"); 
            //  ...run the stop function.
            stop();
            //  Alert the user that time is up.
            // alert("Time Up!");
            timer = 31;
            reset()

        }
        else if ((questions[2].answers[0].correct) === false){
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light replaceImage'> Incorrect! </h2> " );
            $('.replaceImage').append("<div><img src = '" + questions[2].gif + "' alt='Super Cool'></div>"); 
            stop();
            //  Alert the user that time is up.
            // alert("Time Up!");
            timer = 31;
            reset()
        }
    });

    $('.Answer1').on('click', function(){
        if ((questions[2].answers[1].correct) === true) {
            console.log("correct")
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light replaceImage'> Correct! </h2>" );
            $('.replaceImage').append("<div><img src = '" + questions[2].gif + "' alt='Super Cool'></div>"); 
            stop();
            //  Alert the user that time is up.
            // alert("Time Up!");
            timer = 31;
            reset()


        }
        else if ((questions[2].answers[1].correct) === false){
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light replaceImage'> Incorrect! </h2> " );
            $('.replaceImage').append("<div><img src = '" + questions[2].gif + "' alt='Super Cool'></div>"); 
            stop();
            //  Alert the user that time is up.
            // alert("Time Up!");
            timer = 31;
            reset()

        }
    });
    $('.Answer2').on('click', function(){
        if ((questions[2].answers[2].correct) === true) {
            console.log("correct")
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light replaceImage'> Correct! </h2>" );
            $('.replaceImage').append("<div><img src = '" + questions[2].gif + "' alt='Super Cool'></div>"); 
            stop();
            //  Alert the user that time is up.
            // alert("Time Up!");
            timer = 31;
            reset()


        }
        else if ((questions[2].answers[2].correct) === false){
            console.log('meow')
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light replaceImage'> Incorrect! </h2> " );
            $('.replaceImage').append("<div><img src = '" + questions[2].gif + "' alt='Super Cool'></div>"); 
            stop();
            //  Alert the user that time is up.
            // alert("Time Up!");
            timer = 31;
            reset()

        }
    });
    $('.Answer3').on('click', function(){
        if ((questions[2].answers[3].correct) === true) {
            console.log("correct")
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light replaceImage'> Correct! </h2>" );
            $('.replaceImage').append("<div><img src = '" + questions[2].gif + "' alt='Super Cool'></div>"); 
            stop();
            //  Alert the user that time is up.
            // alert("Time Up!");
            timer = 31;
            reset()


        } 
        else if ((questions[2].answers[3].correct) === false){
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light replaceImage'> Incorrect! </h2> " );
            $('.replaceImage').append("<div><img src = '" + questions[2].gif + "' alt='Super Cool'></div>"); 
            stop();
            //  Alert the user that time is up.
            // alert("Time Up!");
            timer = 31;
            reset()

            console.log('meow')
        }
    });        
}
if(counter === 3){
    $('.Answer0').on('click', function() {
        if ((questions[3].answers[0].correct) === true) {
            console.log("correct")
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light replaceImage'> Correct! </h2> " );
            $('.replaceImage').append("<div><img src = '" + questions[3].gif + "' alt='Super Cool'></div>"); 
            //  ...run the stop function.
            stop();
            //  Alert the user that time is up.
            // alert("Time Up!");
            timer = 31;
            reset()

        }
        else if ((questions[3].answers[0].correct) === false){
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light replaceImage'> Incorrect! </h2> " );
            $('.replaceImage').append("<div><img src = '" + questions[3].gif + "' alt='Super Cool'></div>"); 
            stop();
            //  Alert the user that time is up.
            // alert("Time Up!");
            timer = 31;
            reset()
        }
    });

    $('.Answer1').on('click', function(){
        if ((questions[3].answers[1].correct) === true) {
            console.log("correct")
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light replaceImage'> Correct! </h2>" );
            $('.replaceImage').append("<div><img src = '" + questions[3].gif + "' alt='Super Cool'></div>"); 
            stop();
            //  Alert the user that time is up.
            // alert("Time Up!");
            timer = 31;
            reset()


        }
        else if ((questions[3].answers[1].correct) === false){
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light replaceImage'> Incorrect! </h2> " );
            $('.replaceImage').append("<div><img src = '" + questions[3].gif + "' alt='Super Cool'></div>"); 
            stop();
            //  Alert the user that time is up.
            // alert("Time Up!");
            timer = 31;
            reset()

        }
    });
    $('.Answer2').on('click', function(){
        if ((questions[3].answers[2].correct) === true) {
            console.log("correct")
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light replaceImage'> Correct! </h2>" );
            $('.replaceImage').append("<div><img src = '" + questions[3].gif + "' alt='Super Cool'></div>"); 
            stop();
            //  Alert the user that time is up.
            // alert("Time Up!");
            timer = 31;
            reset()


        }
        else if ((questions[3].answers[2].correct) === false){
            console.log('meow')
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light replaceImage'> Incorrect! </h2> " );
            $('.replaceImage').append("<div><img src = '" + questions[3].gif + "' alt='Super Cool'></div>"); 
            stop();
            //  Alert the user that time is up.
            // alert("Time Up!");
            timer = 31;
            reset()

        }
    });
    $('.Answer3').on('click', function(){
        if ((questions[3].answers[3].correct) === true) {
            console.log("correct")
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light replaceImage'> Correct! </h2>" );
            $('.replaceImage').append("<div><img src = '" + questions[3].gif + "' alt='Super Cool'></div>"); 
            stop();
            //  Alert the user that time is up.
            // alert("Time Up!");
            timer = 31;
            reset()


        } 
        else if ((questions[3].answers[3].correct) === false){
            $('#replaceImage').replaceWith( "<h2 class= 'text-center btn-light replaceImage'> Incorrect! </h2> " );
            $('.replaceImage').append("<div><img src = '" + questions[3].gif + "' alt='Super Cool'></div>"); 
            stop();
            //  Alert the user that time is up.
            // alert("Time Up!");
            timer = 31;
            reset()

            console.log('meow')
        }
    });        
}
}
        decrement();

        run();
    
        setup();

        clicks();

        



//Primary problems


//#3: how do you loop through questions effectively
//#4: When my timer runs out and it tries to reset I get the error message in console. What does this mean?
//#5: Find every place with questions[0] and find a way to loop on correct answer (can possibly have a success variable)


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
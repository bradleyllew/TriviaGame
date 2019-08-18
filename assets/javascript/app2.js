$(function () {
    // For some reason, timer was skipping initial number, so started with 11 and user sees 10???
    var seconds = 11;
    var currentQuestion = 0;
    var correct = 0;
    var wrong = 0;
    var timer;
    

    // To start the game on click of the button, and to then hide start button
    $(".start").on("click", function () {
        $(this).hide();
        playGame();
    });

    // To change to the next question in the array, and to hide the timer after the last question
    function nextQuestion() {
        // When the last question is the current question...
        var outOfQquestions = (triviaQuestions.length - 1) === currentQuestion;

        if (outOfQquestions) {
            clearInterval(timer);
            // $("#timer").text("0"); ---- began trying this, but was more efficient to hide
            $("#timer").hide();
            console.log("All done!");
            // Invoking the function that displays the result, bez game is over
            displayResult();
            
            
        } else {
            // Otherwise, move to the next question....
            currentQuestion++;
        //    Invokes the playGame function below...
            playGame();
        }
    }






    // Function to build the trivia....
    function playGame() {


        seconds = 11;
        // To start each question with fresh time
        clearInterval(timer);
        // To make the timer countdown
        timer = setInterval(decrement, 1000);

        function decrement() {
            // Decrementing the timer
            seconds--;
            // Updating the timer value in the HTML/DOM
            $("#timer").html("<h2>" + "Time Remaining: " + seconds + "</h2>");

            // If no time is left, invoke stop function below...
            if (seconds === 0) {
                stop();
                console.log("time's up");
                // $("#trivia").hide();
            }
        }
        // Declaring function to clear timer, count wrong response, and to go to the next question
        function stop() {
            clearInterval(timer);
            wrong++;
            nextQuestion();
        }

        var question = triviaQuestions[currentQuestion].question;
        var choices = triviaQuestions[currentQuestion].choices;

        // Putting the questions into the DOM...(and memory?)
        $("#trivia").html(`
            <h4>${question}</h4>
            ${displayAnswers(choices)}`
        );

        // "<h4>" + question + "</h4>") ------- Writting it this way didn't work, and I'm not sure why
        // displayAnswers(choices);
        // console.log(displayAnswers);
    }

    function displayAnswers(choices) {
        // Displaying the answer choices 
        console.log(choices);
        var result = '';

        for (var i = 0; i < choices.length; i++) {
            // I don't understand the back-tic or much of the syntax here...I googled to get help with this part
            // and with the <h4> question display above...dunno how, but it works!
            result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
        }

        return result;
    }
    // Capturing the users answer choice on his/her click --- would've been captured in radio button...
    $(document).on('click', '.choice', function () {
        var selectedAnswer = $(this).attr('data-answer');
        var correctAnswer = triviaQuestions[currentQuestion].correctAnswer;
        // Comparing the correct answer to the user choice, updating score tally, and moving to next question
        if (correctAnswer === selectedAnswer) {
            correct++;
            nextQuestion();
        } else {
            wrong++;
            nextQuestion();
        }
        // Making sure user choice is being captured
        console.log('yay!', selectedAnswer);
    });
    // Function to be invoked above, upon end of game
    function displayResult() {
        // Filling in captured score talley into the HTML and displaying the results
        var result = `
        <p><h1>You got ${correct} right</h1></p>
        <p><h1>You got ${wrong} wrong</h1></p>`;

        // <button id="reset">Reset</button> ----- Hoped to attempt reset button, but too much time spent trying to
        // apply radio buttons...Will come back to this at some point....

        $('#trivia').html(result);
    }

    // $("#reset").on("click", function () {
    //     console.log("working");
    //     $(this).hide();
    //     seconds = 5;
    //     currentQuestion = 0;
    //     correct = 0;
    //     wrong = 0;
    //     timer  = null;
    //     playGame();
    // })




})

$(function () {

    var seconds = 5;
    var currentQuestion = 0;
    var correct = 0;
    var wrong = 0;
    var timer;

    $(".start").on("click", function () {
        $(this).hide();
        playGame();
    });

    function nextQuestion() {

        var outOfQquestions = (triviaQuestions.length - 1) === currentQuestion;

        if (outOfQquestions) {
            console.log("All done!");
            displayResult();
        } else {
            currentQuestion++;
            playGame();
        }
    }







    function playGame() {


        seconds = 5;
        clearInterval(timer);
        timer = setInterval(decrement, 1000);

        function decrement() {
            seconds--;
            $("#timer").html("<h2>" + "Time Remaining: " + seconds + "</h2>");

            if (seconds === 0) {
                stop();
                console.log("time's up");
                // $("#trivia").hide();
            }
        }

        function stop() {
            clearInterval(timer);
            wrong++;
            nextQuestion();
        }

        var question = triviaQuestions[currentQuestion].question;
        var choices = triviaQuestions[currentQuestion].choices;

        $("#trivia").html(`
            <h4>${question}</h4>
            ${displayAnswers(choices)}`
        );

        // "<h4>" + question + "</h4>")
        // displayAnswers(choices);
        // console.log(displayAnswers);
    }

    function displayAnswers(choices) {

        console.log(choices);
        var result = '';

        for (var i = 0; i < choices.length; i++) {
            result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
        }

        return result;
    }
    // playGame();
    $(document).on('click', '.choice', function () {
        var selectedAnswer = $(this).attr('data-answer');
        var correctAnswer = triviaQuestions[currentQuestion].correctAnswer;

        if (correctAnswer === selectedAnswer) {
            correct++;
            nextQuestion();
        } else {
            wrong++;
            nextQuestion();
        }
        console.log('yay!', selectedAnswer);
    });

    function displayResult() {
        var result = `
        <p>You got ${correct} question(s) right</p>
        <p>You got ${wrong} question(s) wrong</p>`;

        // <button id="reset">Reset</button>

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

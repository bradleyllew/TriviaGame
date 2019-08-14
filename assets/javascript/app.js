
$(function () {


    // start game button that vanishes:   MOVE DISPLAY ABOVE PLAY?
    $(".start").on("click", function () {
        $(this).hide();
        play();
        // displayQuestions();
    });


    // countdown timer that stops at zero:
    var seconds = 6;
    var timer;

    // question/result vars:

    var currentQuestion = 0;

    var correctQuestions = 0;
    var incorrectQuestions = 0;
    var unansweredQuestions = 0;

    function play() {
        clearInterval(timer);
        timer = setInterval(decrement, 1000);
    }

    function decrement() {
        seconds--;
        $("#timer").html("<h2>" + "Time Remaining: " + seconds + "</h2>");

        if (seconds === 0) {
            stop();
            console.log("time's up");
            $("#trivia").hide();
            displayResults();
        }
    }

    function stop() {
        clearInterval(timer);
    }

    // makes questions appear:    NEED TO MOVE INTO PLAY FUNCTION?
    console.log(questions);

    function displayQuestions () {
        var question = questions[currentQuestion].question;
        var choices = questions[currentQuestion].choices;
        $("#trivia").html('<h3>' + question + '<h3>');
        $("#trivia").html('<h3>' + choices + '<h3>');

    }
    displayQuestions(); 
    
    
    // WHAT TYPE OF LOOP?????

    function displayChoices(choices) {
        var result = '';

        for (var i =0; i < choices.length; i++) {
        result += '<p class ="choice" data-answers="${choices[i]">${choices[i]}></p>'
        }
        return result;
    }
    displayChoices([i]);
    




    // questions need buttons/form.....






    // done announcement:


    // display results:



























})
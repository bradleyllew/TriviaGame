

// Early on messing with pseudocode & trying to figure out what needed to happen/experimenting
// Moved to new .js for cleaner readability so unlinked this sheet




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
        var question = triviaQuestions[currentQuestion].question;
        var choices = triviaQuestions[currentQuestion].choices;
        $("#trivia").html('<h3>' + question + '<h3>');
        $("#trivia").html('<h3>' + choices + '<h3>');
        $(displayChoices(choices));
    }
    displayQuestions(); 
    
    
    // WHAT TYPE OF LOOP?????

    function displayChoices(choices) {
        var result = '';

        for (var i =0; i < choices.length; i++) {
        result += '<p class ="choice" data-answers="${choices[i]">${choices[i]}></p>'
        }
        // method: "GET";  TRY TO USE THIS?
        return result;
    }
    // displayChoices([i++]);
    




    // questions need buttons/form.....






    // done announcement:


    // display results:



























})
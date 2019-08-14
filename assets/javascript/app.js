$(function () {


    // start game button that vanishes:
    $("#start").on("click", function () {  
        $(this).hide();
    });

    
    // countdown timer that stops at zero
    var seconds = 10;
    var timer;

    function play() {
        clearInterval(timer);
        timer = setInterval(decrement, 1000);
    }

    function decrement() {
        seconds--;
        $("#timer").html("<h2>" + seconds + "</h2>");

        if (seconds === 0) {
            stop();
            console.log("time's up");
        }
    }

    function stop() {
        clearInterval(timer);
    }

    play();


































})
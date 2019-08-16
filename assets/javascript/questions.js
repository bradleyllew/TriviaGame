


// Putting questions in array so I can pull them out....

var triviaQuestions = [
    {
        question: "Where is the heart of a shrimp located?",
        choices: [
            "It's chest ",
             "It's head ",
             "It's abdomen ",
        ],
        correctAnswer: "It's head "
    },
    {
        question: "What animal has fingerprints so indistinguishable from a humans, that it's been confused at a crime scene?",
        choices: [
             "Koala ",
             "Gorilla ",
             "Howler Monkey ",
        ],
        correctAnswer: "Koala "
    },
    {
        question: "What is the only animal unable to jump?",
        choices: [
             "Giraffe ",
             "Rhino ",
             "Elephant ",
        ],
        correctAnswer: "Elephant "
    },
    {
        question: "What percentage of Antarctic ice is made up of penguin urine?",
        choices: [
            "15% ",
            "8% ",
            "3% ",
        ],
        correctAnswer: "3% "
    },
    {
        question: "What animal has eyes bigger that its brain?",
        choices: [
             "Poison Dart Frog ",
             "Ostrich ",
             "Sugar Glider ",
        ],
        correctAnswer: "Ostrich "
    },
    {
        question: "What is a rhino's horn made of?",
        choices: [
             "Nerve Endings ",
             "Bone, duh ",
             "Hair ",
        ],
        correctAnswer: "Hair "
    },
    {
        question: "What animal can't fart?",
        choices: [
             "Kangaroo ",
             "Flamingo ",
             "Grizzly Bear ",
        ],
        correctAnswer: "Kangaroo "
    },
    {
        question: "How many noses does a slug have?",
        choices: [
             "A slug has a nose? ",
             "1, of course ",
             "4 ",
        ],
        correctAnswer: "4 "
    },
]

function radio() {
    for (var i =0; i < choices.length; i++) {
        var choices = [];
        choices.push(
            `<label><input type="radio" name="demo" value="one" id="radio-one" class="form-radio" checked></label>`
        );
     radio(); 
}
}

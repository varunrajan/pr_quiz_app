$(function() {

  $(".question").submit(function(e) {
    e.preventDefault();
    const selectedChoice = $('input[name="answer"]:checked').val();
    checkAnswer( selectedChoice );
    // console.log('`answerReview` ran');
    // console.log(correctAnswers);

  })

});

let questionsAnswered = 0;

let correctAnswers = 0;

const allQuestions = [
    {
      question: "What talent did Jessica Wicks showcase when she won the Miss Pawnee beauty pageant in 1994?",
      answerChoices: [
        "Eating a whole cake",
        "Packing a suitcase",
        "Baking muffins",
        "Baton twirling"
      ],
      correct: "Packing a suitcase"
    },
    {
      question: "What is Pawnee’s sister city?",
      answerChoices: [
        "Mexico City, Mexico",
        "Guadalajara, Mexico",
        "Caracas, Venezuela",
        "Boraqua, Venezuela"
      ],
      correct: "Boraqua, Venezuela"
    },
    {
      question: "Attribute the quote: \"I was born ready. I’m _____ f*cking ____.\"",
      answerChoices: [
        "Ron [f*cking] Swanson",
        "April [f*cking] Ludgate",
        "Andy [f*cking] Dwyer",
        "Tom [f*cking] Haverford"
      ],
      correct: "Ron [f*cking] Swanson"
    }//,

/*
 *    {
 *     question: "Who shot Ron on the hunting trip?",
 *     answerChoices: [
 *       "Leslie",
 *       "Donna",
 *       "Tom (correct)",
 *       "Jerry"
 *     ],
 *     correct: "Tom"
 *   },
 *   {
 *     question: "Jerry’s real name is:",
 *     answerChoices: [
 *       "Larry",
 *       "Jerry",
 *       "Barry",
 *       "Garry"
 *     ],
 *     correct: "Garry"
 *   },
 *   {
 *     question: "What did R&B star and Donna’s cousin Ginuwine call his rubber ducks when he was little?",
 *     answerChoices: [
 *       "The Quackson Five",
 *       "The Ducktations",
 *       "Quack City",
 *       "Ducks & Roses"
 *     ],
 *     correct: "The Quackson Five"
 *   },
 *   {
 *     question: "Lil’ Sebastian is a…",
 *     answerChoices: [
 *       "Horse",
 *       "Pony",
 *       "Miniature horse",
 *       "All of the above"
 *     ],
 *     correct: "Miniature horse"
 *   },
 *   {
 *     question: "What’s Ben Wyatt’s favorite food?",
 *     answerChoices: [
 *       "Calzones",
 *       "Pizza",
 *       "Fruit Loops",
 *       "Ice"
 *     ],
 *     correct: "Calzones"
 *   },
 *   {
 *     question: "Ron Swanson’s political views can be categorized as…",
 *     answerChoices: [
 *       "Conservative",
 *       "Libertarian",
 *       "Progressive",
 *       "Anarchist"
 *     ],
 *     correct: "Libertarian"
 *   },
 *   {
 *     question: "What is a Pawnee resident’s preferred search engine?",
 *     answerChoices: [
 *       "Yahoo",
 *       "AltaVista",
 *       "AskJeeves",
 *       "Bing"
 *     ],
 *     correct: "AltaVista"
 *   } 
 */
  ];

function startQuiz() {
  /** 
   *  Generate first quiz question upon user clicking
   *  button with class "start-button".
   *  Hides the section with class "quiz-question-start"
   *  and shows section with class "quiz-question-section"
   *  Adds first question content within label tag
   *  for "quiz-question-text"
   *  Populates radio button inputs with values of answer
   *  choices for the given question.
   */
}

function checkAnswer( userInput ) {
  // compare selected choice w/correct ans from obj

  // look at corresponding ary indx
  // compare value of allQuestions[ indx ].correct... 
  // if correct ++ correctAnswers
  let currentQuestion = allQuestions[questionsAnswered].correct;
  // console.log(userInput);
  // console.log(currentQuestion);
  if (userInput == currentQuestion){
    correctAnswers++;
  }



  
  // tell user if correct/incorrect
  // show next question
  replaceQuestion();

}

function replaceQuestion() {
  /** 
   *  Upon submitting a response to a question, replace
   *  the quiz question and choices with those of the
   *  next question.
   *  Replace label for "quiz-question-text" with the
   *  next question.
   */
  questionsAnswered++
  
}

function answerCount(){

}
$(function() {

  $(".start-button").click(function(e) {
    e.preventDefault();
    startQuiz();
  });

  $(".question").submit(function(e) {
    e.preventDefault();
    const selectedChoice = $('input[name="answer"]:checked').val();
    checkAnswer( selectedChoice );
  //   console.log(questionsAnswered);
  //   console.log(correctAnswers);

  })

  $(".next-question-button").click(function(e) {
    e.preventDefault();
    $('label').removeClass("correct");
    $('.next-question-button').toggleClass('hide');
    showQuestion();
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
    },
    {
     question: "Who shot Ron on the hunting trip?",
     answerChoices: [
       "Leslie",
       "Donna",
       "Tom",
       "Jerry"
     ],
     correct: "Tom"
   },
   {
     question: "Jerry’s real name is:",
     answerChoices: [
       "Larry",
       "Jerry",
       "Barry",
       "Garry"
     ],
     correct: "Garry"
   },
   {
     question: "What did R&B star and Donna’s cousin Ginuwine call his rubber ducks when he was little?",
     answerChoices: [
       "The Quackson Five",
       "The Ducktations",
       "Quack City",
       "Ducks & Roses"
     ],
     correct: "The Quackson Five"
   },
   {
     question: "Lil’ Sebastian is a…",
     answerChoices: [
       "Horse",
       "Pony",
       "Miniature horse",
       "All of the above"
     ],
     correct: "Miniature horse"
   },
   {
     question: "What’s Ben Wyatt’s favorite food?",
     answerChoices: [
       "Calzones",
       "Pizza",
       "Fruit Loops",
       "Ice"
     ],
     correct: "Calzones"
   },
   {
     question: "Ron Swanson’s political views can be categorized as…",
     answerChoices: [
       "Conservative",
       "Libertarian",
       "Progressive",
       "Anarchist"
     ],
     correct: "Libertarian"
   },
   {
     question: "What is a Pawnee resident’s preferred search engine?",
     answerChoices: [
       "Yahoo",
       "AltaVista",
       "AskJeeves",
       "Bing"
     ],
     correct: "AltaVista"
   } 
  ];
const allFeedback = {
  undefined: "You have to choose an answer",
  true: "Wow, you watch this show way too much. You have no life.",
  false: "Uh okay, have you ever seen this show?",
  };

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
  $(".start-button").hide();
  $(".quiz-question-section").show();
  showQuestion();
}

function showCount() {
  $('.question-count').show();
  $('span.num-question').text(questionsAnswered);
  $('span.num-correct').text(correctAnswers);
}

function checkAnswer( userInput ) {
  // compare selected choice w/correct ans from obj

  // look at corresponding ary indx
  // compare value of allQuestions[ indx ].correct... 
  // if correct ++ correctAnswers
  let correctAnswer = allQuestions[questionsAnswered].correct;
   console.log(userInput);
  // console.log(correctAnswer);

  /* First, check if user selected an answer. If so, then
   * evaluate userStatus to true or false, depending on
   * whether the answer was correct or not.
  */
  let userStatus;
  if (userInput) {
    userStatus = (userInput == correctAnswer);
    questionsAnswered++;
      // Need to find a place for the following function:
      // showQuestion();
    showCorrectAnswer(correctAnswer);
    if (userStatus == true) {
      correctAnswers++;
    }
  }

  // tell user if correct/incorrect
  provideFeedback(userStatus);
  showCount();
}

function showCorrectAnswer( answer ) {
  /* Check each answer choice in
   * the form
  */
  let correctChoice = $(`input[value="${answer}"]`).attr('id');
  $(`label[for=${correctChoice}]`).addClass("correct");
  $('.next-question-button').toggleClass('hide');
}

function provideFeedback( value ) {
  // if the answer is wrong, highlight the
  // correct answer and tell user they are
  // wrong below the answer choices
  // Otherwise, still highlight the correct
  // answer and tell user they were correct.
  $('.feedback-section p').text(allFeedback[value]);
  console.log(value);
  console.log(allFeedback[value]);
  // Provide button for users to move onto
  // the next question.

}

function showQuestion() {
  /** 
   *  Upon submitting a response to a question, replace
   *  the quiz question and choices with those of the
   *  next question.
   *  Replace label for "quiz-question-text" with the
   *  next question.
   */
  let currentQuestion = allQuestions[questionsAnswered];
  let choices = currentQuestion.answerChoices;
  // console.log(currentQuestion);
  // console.log(currentQuestion.question);
  $('.quiz-question-text').text(currentQuestion.question);
    for (i = 0; i < choices.length; i++){
      // For every choice in the list of possible answers
      // replace the value in the form for the
      // corresponding radio input
      $(`input#${i}`).val(choices[i]).prop('checked',false);
      $(`label[for="${i}"]`).text(choices[i]);
    }   

}

function answerCount(){

}
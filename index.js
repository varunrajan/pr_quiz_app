$(function() {

  $(".start-button").click(function(e) {
    e.preventDefault();
    startQuiz();
    highlightChosenAnswer();
  });

  $(".question").submit(function(e) {
    e.preventDefault();
    const selectedChoice = $('input[name="answer"]:checked').val();
    checkAnswer( selectedChoice );
    $('.selected').removeClass('selected');
  //   console.log(questionsAnswered);
  //   console.log(correctAnswers);

  })

  $(".next-question-button").click(function(e) {
    e.preventDefault();
    $('label').removeClass("correct");
    $('.next-question-button').toggleClass('hide');
    $('button[type=submit]').toggleClass('hide');
    showQuestion();
  })

  $(".see-results").click(function(e) {
    e.preventDefault();
    showResults(status,message);
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
    }
    ,
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

let totalQuestions = allQuestions.length;
let grade;

const allFeedback = {
  undefined: "You have to choose an answer",
  true: "Wow, you watch this show way too much. You have no life.",
  false: "Uh okay, have you ever seen this show?",
  };

const quizResults = [
  {
    status: 'Perfect',
    gradeMin: 1,
    gradeMax: 1.1,
    message: `You're among the biggest fans in the world!`
  },
  {
    status: 'Awesome!',
    gradeMin: 0.8,
    gradeMax: 1,
    message: `Not bad! You're a pretty big fan.`
  },
  {
    status: 'Cool',
    gradeMin: 0.6,
    gradeMax: 0.8,
    message: `Okay, so you've at least seen the show`
  },
  {
    status: 'Meh',
    gradeMin: 0.4,
    gradeMax: 0.6,
    message: `You're clearly a casual viewer trying to impress your friends.`
  },
  {
    status: 'Uhh...',
    gradeMin: 0.2,
    gradeMax: 0.4,
    message: `You should probably sit through a marathon or two before taking this quiz again.`
  },
  {
    status: 'Lucky',
    gradeMin: 0.1,
    gradeMax: 0.2,
    message: `I don't think you've ever seen the show. Even random chance will get you some points.`
  },
  {
    status: 'Jerry',
    gradeMin: 0,
    gradeMax: 0.1,
    message: `Wow. You literally couldn't have done worse on this quiz, Jerry. Get out of here!`
  }
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
  $(".start-button").hide();
  $(".quiz-question-section").show();
  showQuestion();
}

function highlightChosenAnswer() {
  $('input').on('click',function() {
        $(this).parent().addClass('selected');
        $(this).parent().siblings().removeClass('selected');
      });
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
  // console.log(userInput);
  // console.log(correctAnswer);

  /* First, check if user selected an answer. If so, then
   * evaluate userStatus to true or false, depending on
   * whether the answer was correct or not.
  */
  let userStatus;
  if (userInput) {
    userStatus = (userInput == correctAnswer);
    questionsAnswered++;

    showCorrectAnswer(correctAnswer);
    if (userStatus == true) {
      correctAnswers++;
    }
  }

  // tell user if correct/incorrect
  provideFeedback(userStatus);
  showCount();
  grade = correctAnswers/questionsAnswered;
  if (questionsAnswered < totalQuestions) {
    $('.next-question-button').toggleClass('hide');
  } else {
    $('.see-results').toggleClass('hide');
    gradeQuiz(grade);
  }
  
}

function showCorrectAnswer( answer ) {
  /* Check each answer choice in
   * the form
  */
  let correctChoice = $(`input[value="${answer}"]`).attr('id');
  $(`label[for=${correctChoice}]`).addClass("correct");
  $('button[type=submit]').toggleClass('hide');
}

function provideFeedback( value ) {
  // if the answer is wrong, highlight the
  // correct answer and tell user they are
  // wrong below the answer choices
  // Otherwise, still highlight the correct
  // answer and tell user they were correct.
  $('.feedback-section p').text(allFeedback[value]);
  //console.log(value);
  //console.log(allFeedback[value]);
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
  $('.feedback-section p').text('');
}

let status;
let message;
function gradeQuiz(rateCorrect) {
  let lowRange;
  let highRange;
  
  for (i in quizResults){
    lowRange = quizResults[i].gradeMin;
    highRange = quizResults[i].gradeMax;
    status = quizResults[i].status;
    message = quizResults[i].message;
    if (rateCorrect >= lowRange && rateCorrect < highRange) {
      return status;
      return message;
    }
  }
}

function showResults(status,message) {
  $('.see-results').toggleClass('hide');
  $('.quiz-results').removeClass("hide");
  $('.ranking').text(status);
  $('.final-messaging').text(message);
  $(".start-button").show();
}


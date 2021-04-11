var readLineSync = require('readline-sync');
const chalk = require('chalk');
var score = 0;

function first() {
  var name = readLineSync.question('Please enter your name: ');
  console.log('Hey ' + name + chalk.green(' Welcome to The Know Me '));

  console.log('=============');
  console.log('=============');
  console.log(chalk.green('All The Best!!'));
  console.log('=============');
  console.log('=============');
  console.log(
    chalk.green(
      'Answer by pressing 1, 2, 3 or 4 key for correct option and press enter'
    )
  );
  console.log('=============');
  console.log('=============');
}

function play(question, options, answer, length) {
  console.log(question);
  for (var i = 0; i < options.length; i++) {
    console.log(i + 1, chalk.cyan(options[i]));
  }
  var chosenAnswer = readLineSync.question();

  if (options[chosenAnswer - 1] === answer) {
    console.log(chalk.green('You are right,') + ' Congrats!');
    score += 1;
  } else {
    console.log(
      chalk.red('Sorry that was wrong. ') +
        'Correct answer is ' +
        chalk.green(answer)
    );
  }

  console.log('Your score is ', score);
  console.log('=======================');
  if (length === 5) {
    if (score <= 3) {
      console.log('Score: ' + (score / 5) * 100 + '%');
      console.log('You can do better next time');
    } else if (score > 2 && score < 4) {
      console.log('Score: ' + (score / 10) * 100 + '%');
      console.log("🔥🔥🔥 Yaay!! that's a great score 🔥🔥🔥");
    } else {
      console.log('Score: ' + (score / 5) * 100 + '%');
      console.log('🔥🔥🔥 Yo!! Lets have coffee some time 🔥🔥🔥.');
    }
  }
}

var quizArray = [
  {
    question: 'Which sports did I play in my school times ?',
    options: ['Soccer.', 'Cricket.', 'Chess.', 'Hockey.'],
    answer: 'Soccer.',
  },
  {
    question: 'Among these 4 which is my favourite car?',
    options: [
      'audir8.',
      'Mercedes E-class.',
      'Kia Seltos.',
      'Aston Martin Vantage.',
    ],
    answer: 'Aston Martin Vantage.',
  },
  {
    question: 'My favourite Anime?',
    options: [
      'Jujutsu Kaisen',
      'My Hero Academia',
      'Boku No pico',
      'Redo Of Healer',
    ],
    answer: 'Jujutsu Kaisen',
  },
  {
    question: 'Which is my favourite IPL team?',
    options: ['KKR.', 'MI.', 'CSK.', 'RR.'],
    answer: 'KKR.',
  },
  {
    question: 'My favourite food?',
    options: [
      'Chicken Crispy',
      'Chicken Soup',
      'Chicken Biryani',
      'Chicken Biryani',
    ],
    answer: 'Chicken Soup',
  },
];

first();
for (var i = 0; i < quizArray.length; i++) {
  play(quizArray[i].question, quizArray[i].options, quizArray[i].answer, i + 1);
}

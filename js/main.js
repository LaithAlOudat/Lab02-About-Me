'use strict';

let userScore = 0;

// Wellcoming message (asking about user name)
let name1 = prompt('HELLO!.. Can you tell me your name?');
console.log('User name is: ' + name1);
alert('Hoody! .. nice to meet you ' + name1);




// function for 1st Q
let age = prompt('Am I 30 years old ? y=yes/n=no');
function ageq1() {
  if ((age.toLocaleLowerCase() === 'y') || (age.toLocaleLowerCase() === 'yes')) {
    console.log('Thats right');
    alert('Thats right');
    userScore++;
  }
  else {
    console.log('No No, wrong answer.');

    alert('Wrong answer. My age is really 30!');
  }
}
ageq1();
/*
// First Q (asking about age)
if ((age.toLocaleLowerCase() === 'y') || (age.toLocaleLowerCase() === 'yes')) {
  console.log('Thats right');
  alert('Thats right');
  userScore++;
}
else {
  console.log('No No, wrong answer. I love Shawermah');
  alert('Wrong answer. love Shawermah');
}
*/
let job = prompt('Am I a software developer ? y=yes/n=no');
function jobq2() {
  if ((job.toLocaleLowerCase() === 'y') || (job.toLocaleLowerCase() === 'yes')) {
    console.log('Thats right');
    alert('Thats right');
    userScore++;
  }
  else {
    console.log('No No, wrong answer. I love Shawermah');
    alert('Wrong answer. love Shawermah');
  }
}
jobq2();
/*
// Second Q (asking about job)
let job = prompt('Am I a software developer ? y=yes/n=no');
if ((job.toLocaleLowerCase() === 'y') || (job.toLocaleLowerCase() === 'yes')) {
  console.log('Thats right');
  alert('Thats right');
  userScore++;
}
else {
  console.log('No No, wrong answer. I love Shawermah');
  alert('Wrong answer. love Shawermah');
}
*/
let field = prompt('Is my favorite field of scince is data scince ? y=yes/n=no');


// function for 3rd Q

function fieldq3() {
  if ((field.toLocaleLowerCase() === 'y') || (field.toLocaleLowerCase() === 'yes')) {
    console.log('Thats right');
    alert('Thats right');
    userScore++;
  }
  else {
    console.log('No No, wrong answer. I love Shawermah');
    alert('Wrong answer. love Shawermah');
  }
}
fieldq3();
/*
// Third Q (asking about field)
let field = prompt('Is my favorite field of scince is data scince ? y=yes/n=no');
if ((field.toLocaleLowerCase() === 'y') || (field.toLocaleLowerCase() === 'yes')) {
  console.log('Thats right');
  alert('Thats right');
  userScore++;
}
else {
  console.log('No No, wrong answer. I love Shawermah');
  alert('Wrong answer. love Shawermah');
}
*/
let hoppy = prompt('Is one of my hoppy weight lefting fitness sport ? y=yes/n=no');

// function for 4th Q

function hoppyq4() {
  if ((hoppy.toLocaleLowerCase() === 'y') || (hoppy.toLocaleLowerCase() === 'yes')) {
    console.log('Thats right');
    alert('Thats right');
    userScore++;
  }
  else {
    console.log('No No, wrong answer.');
    alert('Wrong answer.');
  }
}
hoppyq4();
/*
// Fourth Q (asking about hoppy)
let hoppy = prompt('Is one of my hoppy weight lefting fitness sport ? y=yes/n=no');
if ((hoppy.toLocaleLowerCase() === 'y') || (hoppy.toLocaleLowerCase() === 'yes')) {
  console.log('Thats right');
  alert('Thats right');
  userScore++;
}
else {
  console.log('No No, wrong answer. I love Shawermah');
  alert('Wrong answer. love Shawermah');
}
*/
let food = prompt('Is my favorite food is shawermah? y=yes/n=no');

// function for 5th Q

function foodq5() {
  if ((food.toLocaleLowerCase() === 'y') || (food.toLocaleLowerCase() === 'yes')) {
    console.log('Thats right');
    alert('Thats right');
    userScore++;
  }
  else {
    console.log('No No, wrong answer.');
    alert('Wrong answer.');
  }
}
foodq5();
/*
// Fifth Q (asking about food)
let food = prompt('Is my favorite food is shawermah? y=yes/n=no');
if ((food.toLocaleLowerCase() === 'y') || (food.toLocaleLowerCase() === 'yes')) {
  console.log('Thats right');
  alert('Thats right');
  userScore++;
}
else {
  console.log('No No, wrong answer. I love Shawermah');
  alert('Wrong answer. love Shawermah');
}
*/
let a = 4;
let rightAnswer = '35';

// function for 6th Q

function guessq6() {
  while (a > 0) {
    let guess = prompt('Guess the number that i hide (1-50)');
    if (guess === rightAnswer) {
      alert('WoOoW. Thats Right!');
      // eslint-disable-next-line no-unused-vars
      userScore++;
      break;
    } else if (guess > rightAnswer) {
      alert('too high');
    } else {
      alert('too low');
    }
    a--;
    alert(a + ' shots left for you.');
  }
  console.log('The answer is: 35');
}
guessq6();

/*
// sixth Q (asking about user Guessing)
let a = 4;
let rightAnswer = '35';
while (a > 0) {
  let guess = prompt('Guess the number that i hide (1-50)');
  if (guess === rightAnswer) {
    alert('WoOoW. Thats Right!');
    // eslint-disable-next-line no-unused-vars
    userScore++;
    break;
  } else if (guess > rightAnswer) {
    alert('too high');
  } else {
    alert('too low');
  }
  a--;
  alert(a + ' shots left for you.');
}
console.log('The answer is: 35');
*/
let a2 = 6;
let favMovies = ['inception', 'interstellar', 'X-Men', 'Avengers'];

// function for 7th Q

function favMoviesq7() {
  while (a2 > 0) {
    let userAnswer = prompt('Can you guess one of my favorite movies?');
    if (userAnswer === favMovies[0]) {
      alert('WoOoW! Nice one! right answer');
      // eslint-disable-next-line no-undef
      userScore++;
      break;
    } else if (userAnswer === favMovies[1]) {
      alert('WoOoW! Nice one! right answer');
      // eslint-disable-next-line no-undef
      userScore++;
      break;
    } else if (userAnswer === favMovies[2]) {
      alert('WoOoW! Nice one! right answer');
      // eslint-disable-next-line no-undef
      userScore++;
      break;
    } else if (userAnswer === favMovies[3]) {
      alert('WoOoW! Nice one! right answer');
      // eslint-disable-next-line no-undef
      userScore++;
      break;
    }


    a2--;
    alert(a2 + ' shots left! ');
  }

}
favMoviesq7();
/*
// Seventh Q (asking about user guessing about my favorite movies)

let a2 = 6;
let favMovies = ['inception', 'interstellar', 'X-Men', 'Avengers'];

while (a2 > 0) {
  let userAnswer = prompt('Can you guess one of my favorite movies?');
  if (userAnswer === favMovies[0]) {
    alert('WoOoW! Nice one! right answer');
    // eslint-disable-next-line no-undef
    userScore++;
    break;
  } else if (userAnswer === favMovies[1]) {
    alert('WoOoW! Nice one! right answer');
    // eslint-disable-next-line no-undef
    userScore++;
    break;
  } else if (userAnswer === favMovies[2]) {
    alert('WoOoW! Nice one! right answer');
    // eslint-disable-next-line no-undef
    userScore++;
    break;
  } else if (userAnswer === favMovies[3]) {
    alert('WoOoW! Nice one! right answer');
    // eslint-disable-next-line no-undef
    userScore++;
    break;
  }
  a2--;
  alert(a2 + ' shots left! ');
}
*/



alert('your Score is:  ' + userScore + '/7');






import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const tour = 3;

export default (gameName = '', question) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameName);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hi ${name}!`);
  for (let i = 0; i < tour; i += 1) {
    const pair = question();
    const getQuestion = car(pair);
    const answer = readlineSync.question(`Question ${getQuestion} `);
    const getCorrectAnswer = cdr(pair);
    if (answer !== getCorrectAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getCorrectAnswer}`);
      console.log(`Let's try again, ${name}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}`);
};

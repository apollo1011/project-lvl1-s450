import readlineSync from 'readline-sync';

const makeRandom = () => Math.ceil(Math.random() * 100);
const GAME_TOUR = 3;

export default (name) => {
  for (let i = 0; i < GAME_TOUR; i += 1) {
    const question = makeRandom();
    const answer = readlineSync.question(`Question ${question} `);
    const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${name}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}`);
};

import { cons } from 'hexlet-pairs';
import myDefault from '..';
import makeRandom from '../utils/random';

const getGcd = (a, b) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  let i = min + 1;
  let result = 0;
  while (i > 0) {
    i -= 1;
    if (max % i === 0 && min % i === 0) {
      result = i;
      break;
    }
  }
  return result;
};

const gcdGame = () => {
  const firstNumber = makeRandom(1, 100);
  const secondNumber = makeRandom(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const getCorrectAnswer = getGcd(firstNumber, secondNumber);
  const correctAnswer = getCorrectAnswer.toString();
  const pair = cons(question, correctAnswer);
  return pair;
};

const game = () => myDefault('Find the greatest common divisor of given numbers.', gcdGame);
export default game;

import { cons } from 'hexlet-pairs';
import makeGame from '..';
import makeRandom from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';

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

const createGcdGame = () => {
  const firstNumber = makeRandom(1, 100);
  const secondNumber = makeRandom(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGcd(firstNumber, secondNumber).toString();
  const pair = cons(question, correctAnswer);
  return pair;
};

export default () => makeGame(gameDescription, createGcdGame);

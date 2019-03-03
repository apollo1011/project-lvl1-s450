import { cons } from 'hexlet-pairs';
import makeGame from '..';
import makeRandom from '../utils';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkIfPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const maxDivider = Math.sqrt(num);
  for (let i = 2; i <= maxDivider; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const createPrimeGame = () => {
  const question = makeRandom(1, 200);
  const correctAnswer = (checkIfPrime(question)) ? 'yes' : 'no';
  const pair = cons(question, correctAnswer);
  return pair;
};

export default () => makeGame(gameDescription, createPrimeGame);

import { cons } from 'hexlet-pairs';
import myDefault from '..';
import makeRandom from '../utils/random';

const evenGame = () => {
  const number = makeRandom(1, 100);
  const isEven = answer => answer % 2 === 0;
  const correctAnswer = (isEven(number)) ? 'yes' : 'no';
  const pair = cons(number, correctAnswer);
  return pair;
};

const game = () => myDefault('Answer "yes" if number even otherwise answer "no".', evenGame);
export default game;

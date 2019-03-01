import { cons } from 'hexlet-pairs';
import myDefault from '..';

const makeRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const question = () => {
  const number = makeRandom(1, 100);
  const isEven = answer => answer % 2 === 0;
  const correctAnswer = (isEven(number)) ? 'yes' : 'no';
  const pair = cons(number, correctAnswer);
  return pair;
};

const game = () => myDefault('Answer "yes" if number even otherwise answer "no".', question);
export default game;

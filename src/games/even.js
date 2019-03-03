import { cons } from 'hexlet-pairs';
import makeGame from '..';
import makeRandom from '../utils';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const checkIfEven = number => number % 2 === 0;

const createEvenGame = () => {
  const question = makeRandom(1, 100);
  const correctAnswer = (checkIfEven(question)) ? 'yes' : 'no';
  const pair = cons(question, correctAnswer);
  return pair;
};

export default () => makeGame(gameDescription, createEvenGame);

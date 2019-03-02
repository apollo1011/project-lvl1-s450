import { cons } from 'hexlet-pairs';
import createGame from '..';
import makeRandom from '../utils';

const progressionLength = 10;

const gameDescription = 'What number is missing in the progression?';

const getArithmeticProgression = (firstNumber, step, length) => {
  const progressionMembers = [];
  let num = firstNumber;
  for (let i = 0; i < length; i += 1) {
    progressionMembers.push(num);
    num += step;
  }
  return progressionMembers;
};

const createProgressionGame = () => {
  const firstMember = makeRandom(1, 100);
  const difference = makeRandom(1, 20);
  const progressionMembers = getArithmeticProgression(firstMember, difference, progressionLength);
  const randomMemberIndex = makeRandom(0, progressionMembers.length - 1);
  const correctAnswer = progressionMembers[randomMemberIndex].toString();
  const question = progressionMembers.map((element, i) => (i === randomMemberIndex ? '..' : element)).join(' ');
  const pair = cons(question, correctAnswer);
  return pair;
};

export default () => createGame(gameDescription, createProgressionGame);

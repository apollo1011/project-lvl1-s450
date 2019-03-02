import { cons } from 'hexlet-pairs';
import makeGame from '..';
import makeRandom from '../utils';

const operatorsMaxIndex = 2;

const gameDescription = 'What is the result of the expression?';

const operators = '*+-';
const createCalcGame = () => {
  const randomOperator = operators[makeRandom(0, operatorsMaxIndex)];
  const firstNumber = makeRandom(1, 100);
  const secondNumber = makeRandom(1, 100);
  const question = firstNumber + randomOperator + secondNumber;
  const getCorrectAnswer = (operator) => {
    let result;
    switch (operator) {
      case '+': result = firstNumber + secondNumber;
        break;
      case '-': result = firstNumber - secondNumber;
        break;
      case '*': result = firstNumber * secondNumber;
        break;
      default: result = NaN;
    }
    return result;
  };
  const correctAnswer = getCorrectAnswer(randomOperator).toString();
  const pair = cons(question, correctAnswer);
  return pair;
};

export default () => makeGame(gameDescription, createCalcGame);

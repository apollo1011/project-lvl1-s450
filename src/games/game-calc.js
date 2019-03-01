import { cons } from 'hexlet-pairs';
import myDefault from '..';

const operatorsMaxIndex = 2;

const makeRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const operators = '*+-';
const calcGame = () => {
  const getOperator = operators[makeRandom(0, operatorsMaxIndex)];
  const firstNumber = makeRandom(1, 100);
  const secondNumber = makeRandom(1, 100);
  const question = firstNumber + getOperator + secondNumber;
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
  const correctAnswer = getCorrectAnswer(getOperator).toString();
  const pair = cons(question, correctAnswer);
  return pair;
};


const game = () => myDefault('What is the result of the expression?', calcGame);
export default game;

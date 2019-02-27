#!/usr/bin/env node
import myDefault from '..';
import myGame from '../game-even';

console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".');
myGame(myDefault());

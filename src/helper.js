const NUMBER = /^[0-9]+$/;
const LETTER = /[a-zA-Z]/;
const WHITESPACE = /\s+/;
const OPERATORS = ['+', '-', '*', '/'];

const isNumber = character => NUMBER.test(character);
const isLetter = character => LETTER.test(character);
const isWhiteSpace = character => WHITESPACE.test(character);
const isOperator = character => OPERATORS.indexOf(character) != -1;
const isOpeningParenthesis = character => character === '(';
const isClosingParenthesis = character => character === ')';
const isParenthesis = character =>
  isOpeningParenthesis(character) || isClosingParenthesis(character);
const isQuote = character => character === '"';
const fPop = arr => arr.shift();
const fPeak = arr => arr[0];

module.exports = {
  isNumber,
  isLetter,
  isWhiteSpace,
  isOperator,
  isOpeningParenthesis,
  isClosingParenthesis,
  isParenthesis,
  isQuote,
  fPeak,
  fPop
};

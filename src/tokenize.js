const {
  isParenthesis,
  isWhiteSpace,
  isNumber,
  isLetter,
  isQuote
} = require('./helper');

const tokenize = input => {
  var tokens = [];
  var cursor = 0;

  while (cursor < input.length) {
    const character = input[cursor];

    if (isParenthesis(character)) {
      tokens.push({
        type: 'Parenthesis',
        value: character
      });
    } else if (isWhiteSpace(character)) {
    } else if (isNumber(character)) {
      let numberString = character;
      while (isNumber(input[cursor + 1])) {
        cursor++;
        numberString += input[cursor];
      }
      tokens.push({
        type: 'Number',
        value: +numberString
      });
    } else if (isLetter(character)) {
      let word = character;
      while (isLetter(input[cursor + 1])) {
        cursor++;
        word += input[cursor];
      }

      tokens.push({
        type: 'Name',
        value: word
      });
    } else if (isQuote(character)) {
      cursor++;
      let str = '';
      while (!isQuote(input[cursor])) {
        str += input[cursor++];
      }
      tokens.push({
        type: 'String',
        value: str
      });
    }

    cursor++;
  }

  return tokens;
};

module.exports = { tokenize };

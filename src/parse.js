const {
  isOpeningParenthesis,
  isClosingParenthesis,
  fPeak,
  fPop
} = require('./helper');

const parenthesize = tokens => {
  const token = fPop(tokens);
  if (isOpeningParenthesis(token.value)) {
    let expresions = [];
    while (!isClosingParenthesis(fPeak(tokens).value)) {
      expresions.push(parenthesize(tokens));
    }
    fPop(tokens);
    return expresions;
  }
  return token;
};

const parse = token => {
  if (Array.isArray(token)) {
    const [identiFire, ...expressions] = token;
    return {
      type: 'CallExpression',
      name: identiFire.value,
      arguments: expressions.map(x => parse(x))
    };
  }

  switch (token.type) {
    case 'Number':
      return {
        type: 'NumericLiteral',
        value: token.value
      };

    case 'String':
      return {
        type: 'StringLiteral',
        value: token.value
      };

    case 'Name':
      return {
        type: 'Identifier',
        name: token.value
      };
  }
};

module.exports = {
  parse: tokens => parse(parenthesize(tokens))
};

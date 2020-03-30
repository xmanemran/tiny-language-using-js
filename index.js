const { tokenize } = require('./src/tokenize');
const { parse } = require('./src/parse');
const { evaluate } = require('./src/evaluate');

const program = '(subtract 12 4)';

console.log(evaluate(parse(tokenize(program))));

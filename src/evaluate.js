const { environment } = require('./standard-library');

const apply = node => {
  const fn = environment[node.name];
  const arg = node.arguments.map(evaluate);
  if (typeof fn !== 'function') {
    throw new TypeError(`❌ ${node.name} is not a function`);
  }
  return fn(...arg);
};

const getIdentifier = node => {
  if (environment[node.name]) {
    return environment[node.name];
  } else {
    throw new ReferenceError(`❌ ${node.name} is not defined`);
  }
};

const evaluate = node => {
  switch (node.type) {
    case 'CallExpression':
      return apply(node);
    case 'Identifier':
      return getIdentifier(node);
    case 'NumericLiteral':
      return node.value;
    case 'StringValue':
      return node.value;
  }
};

module.exports = {
  evaluate
};

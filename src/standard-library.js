const all = fn => (...list) => list.reduce(fn);

const add = all((a, b) => a + b);
const subtract = all((a, b) => a - b);
const pi = Math.PI;
const max = (...list) => Math.max(...list);

const environment = {
  add,
  subtract,
  pi,
  max
};

module.exports = { environment };

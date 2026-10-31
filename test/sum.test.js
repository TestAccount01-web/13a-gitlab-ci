const test = require('node:test');
const assert = require('node:assert');
const { sum, subtract } = require('../src/sum');

test('sum adds numbers', () => assert.strictEqual(sum(2, 3), 5));
test('subtract returns the difference of two numbers', () => assert.strictEqual(subtract(5, 3), 2));

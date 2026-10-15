const test = require('node:test');
const assert = require('node:assert');
const { squareArea } = require('./index');

test('area of a square with side 6 is 36', () => {
  assert.strictEqual(squareArea(6), 36);
});

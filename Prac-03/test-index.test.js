const test = require('node:test');
const assert = require('node:assert');
const { Point } = require('./index');

test('constructor stores x and y', () => {
  const p = new Point(2, -5);
  assert.strictEqual(p.x, 2);
  assert.strictEqual(p.y, -5);
});

test('distance_to returns 5 between (3, 4) and (0, 0)', () => {
  assert.strictEqual(new Point(3, 4).distance_to(new Point(0, 0)), 5);
});

test('distance_to is symmetric', () => {
  const a = new Point(1, 2);
  const b = new Point(-2, 6);
  assert.strictEqual(a.distance_to(b), b.distance_to(a));
});

test('distance_to the same point is 0', () => {
  const p = new Point(7, 7);
  assert.strictEqual(p.distance_to(p), 0);
});

test('distance_to works with negative coordinates', () => {
  assert.strictEqual(new Point(-1, -1).distance_to(new Point(2, 3)), 5);
});

test('distance_to works with non-integer results', () => {
  assert.ok(Math.abs(new Point(0, 0).distance_to(new Point(1, 1)) - Math.SQRT2) < 1e-12);
});

test('move shifts the point by dx and dy', () => {
  const p = new Point(1, 2);
  p.move(3, -4);
  assert.strictEqual(p.x, 4);
  assert.strictEqual(p.y, -2);
});

test('move by (0, 0) leaves the point unchanged', () => {
  const p = new Point(5, 6);
  p.move(0, 0);
  assert.deepStrictEqual([p.x, p.y], [5, 6]);
});

test('move calls accumulate', () => {
  const p = new Point(0, 0);
  p.move(1, 1);
  p.move(2, 3);
  assert.deepStrictEqual([p.x, p.y], [3, 4]);
});

test('is_origin is true for (0, 0)', () => {
  assert.strictEqual(new Point(0, 0).is_origin(), true);
});

test('is_origin is false when only one coordinate is zero', () => {
  assert.strictEqual(new Point(0, 1).is_origin(), false);
  assert.strictEqual(new Point(1, 0).is_origin(), false);
});

test('is_origin is false for a non-zero point', () => {
  assert.strictEqual(new Point(3, 4).is_origin(), false);
});

test('is_origin becomes true after moving to the origin', () => {
  const p = new Point(3, 4);
  p.move(-3, -4);
  assert.strictEqual(p.is_origin(), true);
});

const test = require('node:test');
const assert = require('node:assert');
const { execFileSync } = require('node:child_process');
const path = require('node:path');

test('index.js prints the largest number (30)', () => {
  const output = execFileSync(process.execPath, [path.join(__dirname, 'index.js')], {
    encoding: 'utf8',
  });
  assert.strictEqual(output.trim(), '30');
});

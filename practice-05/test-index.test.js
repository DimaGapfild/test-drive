const test = require('node:test');
const assert = require('node:assert');
const { execFileSync } = require('node:child_process');
const path = require('node:path');

test('index.js prints the largest number (30)',
  () => {
    const output = execFileSync(process.execPath, [path.join(__dirname, 'index.js')], {
      encoding: 'utf8',
      env: { ...process.env, FORCE_COLOR: '0' }, // disable colored output
  });
  assert.strictEqual(output.trim(), '30');
});

const assert = require('assert');
const copy = require('copy-concurrently');
const path = require('path');

const targets = ['dist'];
const files = ['LICENSE.txt', 'CHANGELOG.md', 'README.md'];

const target = process.argv[2];
assert(targets.includes(target));

Promise.resolve().then(() => {
  return copy('webextension', target);
}).then(() => {
  return Promise.all(files.map((file) => {
    return copy(file, path.join(target, file));
  }));
}).catch(error => {
  console.error(error);// eslint-disable-line no-console
  process.exit(1);
});

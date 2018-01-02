const assert = require('assert');
const { promisify } = require('util');
const fs = require('fs');
const path = require('path');

const targets = ['dist'];

const target = process.argv[2];
assert(targets.includes(target));

let packageMeta;
let manifest;

Promise.resolve().then(() => {
  return promisify(fs.readFile)('package.json', 'utf-8');
}).then(data => {
  packageMeta = JSON.parse(data);
}).then(() => {
  return promisify(fs.readFile)(path.join('webextension', 'manifest.json'), 'utf-8');
}).then(data => {
  manifest = JSON.parse(data);
}).then(() => {
  manifest.version = packageMeta.version;
  return promisify(fs.writeFile)(path.join(target, 'manifest.json'), JSON.stringify(manifest, null, 2));
}).catch(error => {
  console.error(error);// eslint-disable-line no-console
  process.exit(1);
});

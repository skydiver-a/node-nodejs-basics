import { release, version } from 'node:os';
import { createServer } from 'node:http';
import { sep, dirname } from 'node:path';
import { fileURLToPath } from 'url';

import * as a from './files/a.json' assert { type: 'json' };
import * as b from './files/b.json' assert { type: 'json' };
import * as c from './files/c.js';

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = a;
} else {
    unknownObject = b;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${fileURLToPath(import.meta.url)}`);
console.log(`Path to current directory is ${dirname(fileURLToPath(import.meta.url))}`);

const createMyServer = createServer((_, res) => {
  res.end('Request accepted');
});

export default { unknownObject, createMyServer };
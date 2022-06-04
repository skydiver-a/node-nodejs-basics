import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';

export const calculateHash = async () => {
    // implement function that calculates SHA256 hash
    // for file fileToCalculateHashFor.txt
    // and return it as hex

    // target file to stream
    const targetStream = createReadStream('files/fileToCalculateHashFor.txt');
    const hashSum = createHash('sha256').setEncoding('hex');

    // hash sum calculates
    targetStream.on('end', () => {
        hashSum.end();
        console.log(hashSum.read());
    });

    // file was read & was wrote to hash object
    targetStream.pipe(hashSum);
};

calculateHash();
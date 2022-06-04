import { createWriteStream } from 'node:fs';
import { createInterface } from 'readline';

export const write = async () => {
    // implement function that writes process.stdin data
    // into file fileToWrite.txt content using Writable Stream

    // target file to write data
    const writableStream = createWriteStream('files/fileToWrite.txt', {encoding: 'utf8'});
    // interface to read data from console
    const readLines = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readLines.on('line', (line) => {
        switch (line.trim()) {
            case 'exit':
                readLines.close();
                break;
            default:
                writableStream.write(line + '\n');
                break;
        }
    }).on('close', () => {
        writableStream.end();
        setTimeout(() => {
            process.exit(0);
        }, 100);
    });
};

write();
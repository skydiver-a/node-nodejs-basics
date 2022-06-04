import { createReadStream } from 'node:fs';

export const read = async () => {
    // implement function that reads file fileToRead.txt content
    // using Readable Stream and prints it's content into process.stdout

    // target file to stream
    const targetStream = createReadStream('files/fileToRead.txt');
    // stream by chunk to console
    targetStream.on('data', chunk => console.log(chunk.toString()));
};

read();
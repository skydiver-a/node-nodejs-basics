import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

export const compress = async () => {
    // implement function that compresses file fileToCompress.txt
    // to archive.gz using zlib and Streams API

    const sourceFile = createReadStream('files/fileToCompress.txt', 'utf-8');
    const targetFile = createWriteStream('files/archive.gz');
    const compressToArchive = createGzip();

    sourceFile.pipe(compressToArchive).pipe(targetFile);
};

compress();
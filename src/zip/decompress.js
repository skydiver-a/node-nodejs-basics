import { createReadStream, createWriteStream } from 'node:fs';
import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream';

export const decompress = async () => {
    // implement function that decompresses archive.gz
    // back to the fileToCompress.txt with same content
    // as before compression using zlib and Streams API

    const sourceFile = createReadStream('files/archive.gz');
    const targetFile = createWriteStream('files/fileToCompress.txt', 'utf-8');
    const decompressFromArchive = createUnzip();

    pipeline(
        sourceFile,
        decompressFromArchive,
        targetFile,
        err => {
            if (err) throw err;
        }
    );

};

decompress();
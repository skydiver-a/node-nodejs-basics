import { readdir, readFile } from 'node:fs';

export const read = async () => {
    // implement function that prints content of the fileToRead.txt
    // into console (if there's no file fileToRead.txt
    // Error with message FS operation failed must be thrown)

    const targetFolder = 'files/';
    const targetFile = 'fileToRead.txt';
    readdir(targetFolder, {withFileTypes: true}, (err) => {
        if (err) throw err;
        readFile(targetFolder + targetFile, 'utf8', (err, data) => {
            if (err) throw err;
            console.log(data);
        });
    });

};

read();
import { access, readdir, unlink } from 'node:fs';

export const remove = async () => {
    // implement function that deletes file fileToRemove.txt
    // (if there's no file fileToRemove.txt
    // Error with message FS operation failed must be thrown)
    const targetFolder = 'files/';
    const targetFile = 'fileToRemove.txt';

    // if source folder doesn't exist
    readdir(targetFolder, {withFileTypes: true}, (err) => {
        if (err) throw err;
    });
    // if source file doesn't exist
    access(targetFolder + targetFile, (err) => {
        if (err) throw err;
    });
    // delete file
    unlink(targetFolder + targetFile, (err) => {
        if (err) throw err;
    });
};

remove();
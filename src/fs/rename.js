import { access, readdir, rename } from 'node:fs';

export const reName = async () => {
    // implement function that renames file wrongFilename.txt
    // to properFilename with extension .md
    // (if there's no file wrongFilename.txt
    // or properFilename.md already exists
    // Error with message FS operation failed must be thrown)

    const targetFolder = 'files/';
    const targetFile = 'wrongFilename.txt';
    const newNameFile = 'properFilename.md';
    // if source folder doesn't exist
    readdir(targetFolder, {withFileTypes: true}, (err) => {
        if (err) throw err;
    });
    // if source file doesn't exist
    access(targetFolder + targetFile, (err) => {
        if (err) throw err;
    });
    // rename if all conditions met
    rename(targetFolder + targetFile, targetFolder + newNameFile, (err) => {
        if (err) throw err;
    })
};

reName();
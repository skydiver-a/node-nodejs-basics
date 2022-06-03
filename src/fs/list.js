import { readdir } from 'node:fs';

export const list = async () => {
    // implement function that prints all array of filenames
    // from files folder into console (if files folder doesn't exists
    // Error with message FS operation failed must be thrown)

    const targetFolder = 'files/';

    readdir(targetFolder, {withFileTypes: true}, (err, files) => {
        if (err) throw err;
        files.forEach(file => {
            if (file.isFile()) {
                console.log(`${file.name}`);
            }
        });
    });
};

list();
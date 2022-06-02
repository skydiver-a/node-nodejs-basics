import { writeFile } from 'node:fs';

export const create = async () => {
    // implement function that creates new file fresh.txt
    // with content I am fresh and young inside of the files folder
    // (if file already exists Error with message FS operation failed must be thrown)
    const filePath = 'files/fresh.txt';
    const fileData = 'I am fresh and young';

    writeFile(filePath, fileData, { flag: 'wx' }, (err) => {
        if (err) throw err;
        console.log('success')
    });

};

create();
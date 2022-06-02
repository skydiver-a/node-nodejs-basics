import { access, mkdir, constants, readdir, copyFile } from 'node:fs';

export const copy = async () => {
    // implement function that copies folder files
    // with all its content into folder files_copy at the same level
    // (if files folder doesn't exists or files_copy has already been created Error with message FS operation failed must be thrown)
    const folderSource = 'files/';
    const folderTarget = 'files_copy/';
    // if source folder doesn't exist
    access(folderSource, constants.F_OK, (err) => {
        if (err) throw err;
    });
    // making directory
    mkdir(folderTarget, (err) => {
        // if target folder already exist
        if (err) throw err;
    });
    // reading source directory
    readdir(folderSource, {withFileTypes: true}, (err, files) => {
        if (err) throw err;
        files.forEach(file => {
          if (file.isFile()) {
            const sourceFile = folderSource + `${file.name}`;
            const targetFile = folderTarget + `${file.name}`;
            // coping files from source to target
            copyFile(sourceFile, targetFile, (err) => {
              if (err) throw err;
            });
          }
        });
    });
};

copy();
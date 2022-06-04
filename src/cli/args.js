import { argv, stdout } from 'node:process';

export const parseArgs = () => {
    // implement function that parses command line arguments
    // (given in format --propName value --prop2Name value2,
    // you don't need to validate it) and prints them
    // to the console in the format
    // propName is value, prop2Name is value2
    let str = '';
    argv.slice(2)
        .forEach((item, index, arr) => {
            if (item.length >= 3 && item.toString().slice(0, 2) === '--') {
                if (index+1 < arr.length) {
                    str += `${item.toString().slice(2)} is ${arr[index+1]}, `;
                }
            }
        })
    stdout.write(str.slice(0, -2));
    stdout.write('\n');
};

parseArgs();
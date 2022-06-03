import { argv, stdout } from 'node:process';

export const parseEnv = () => {
    // implement function that parses environment variables
    // with prefix RSS_ and prints them to the console in the format
    // RSS_name1=value1; RSS_name2=value2
    let str = '';
    argv.slice(2)
        .forEach((item, index, arr) => {
            if (item.length >= 4 && item.toString().slice(0, 4) === 'RSS_') {
                if (index+1 < arr.length) {
                    str += `${item.toString()}=${arr[index+1]}; `;
                }
            }
        })
    stdout.write(str.slice(0, -2));
    stdout.write('\n');
};

parseEnv();
import { env, stdout } from 'node:process';

export const parseEnv = () => {
    // implement function that parses environment variables
    // with prefix RSS_ and prints them to the console in the format
    // RSS_name1=value1; RSS_name2=value2

    let str = '';
    Object.entries(env).forEach(([key, value] = entry) => {
        if (key.toString().slice(0, 4) === 'RSS_') {
            str += `${key}=${value}; `;
        }
    });
    stdout.write(str.slice(0, -2));
    stdout.write('\n');
};

parseEnv();
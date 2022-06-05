import { Transform } from 'node:stream';

export const transform = async () => {
    // implement function that reads data from process.stdin,
    // reverses text using Transform Stream
    // and then writes it into process.stdout

    const reverseTextStream = new Transform({
        transform: (chunk, encoding, callback) => {
            try {
                const reverseText = `${chunk.toString('utf8')
                                        .split('')
                                        .reverse()
                                        .join('')}`;
                callback(null, reverseText);
            } catch (err) {
                callback(err);
            }
        }
    });

    process.stdin.pipe(reverseTextStream).pipe(process.stdout);
};

transform();
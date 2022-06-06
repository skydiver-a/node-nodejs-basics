import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';

export const performCalculations = async () => {
    // implement function that creates number of worker threads
    // (equal to the number of host machine logical CPU cores)
    // from file worker.js and able to send data to those threads
    // and to receive result of the computation from them.
    // You should send incremental number starting from 10 to each worker.
    // For example: on host machine with 4 cores you should create 4 workers
    // and send 10 to first worker, 11 to second worker, 12 to third worker,
    // 13 to fourth worker. After all workers will finish,
    // function should return array of results.
    // The results are an array of objects with 2 properties:
    // - status - 'resolved' in case of successfully received value
    //   from worker or 'error' in case of error in worker
    // - data - value from worker in case of success
    //   or null in case of error in worker

    const result = await Promise.all(
        cpus().map(async (_, i) => {
            // https://habr.com/ru/company/ruvds/blog/437984/
            const promise = new Promise((resolve, reject) => {
                const worker = new Worker('./worker.js', { workerData: 10 + i });
                worker.on('message', value => {
                    resolve({ status: 'resolve', data: value });
                });
                worker.on('error', () => {
                    reject({ status: 'reject', data: null });
                });
                worker.on('exit', (code) => {
                  if (code !== 0)
                    reject(new Error(`Worker stopped with exit code ${code}`));
                })
            });

            return await promise;
        })

    );

    console.log(result);
}

performCalculations();
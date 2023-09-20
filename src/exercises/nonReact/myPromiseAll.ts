export const myPromiseAll = (promises: Promise<any>[]): Promise<any[]> => {
    if (promises.length === 0) {
        return Promise.resolve([]);
    }
    
    const results = new Array(promises.length);
    let unsettledLeft = promises.length;
    let rejected = false;

    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            promise.then(result => {
                if (rejected) {
                    return;
                }
                results[index] = result;
                unsettledLeft--;

                if (unsettledLeft === 0) {
                    resolve(results);
                }

            }).catch((reason) => {
                if (!rejected) {
                    reject(reason);
                    rejected = true;
                }
            });
        });
    })
}
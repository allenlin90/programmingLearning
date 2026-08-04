let counter = 1;
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                reject('Numbers must be positive!');
            }
            resolve(a + b);
        }, 500)
    });
}

const doWork = async () => {
    console.log(`${counter++} time approach`);
    const sum = await add(1, 99);
    console.log(`${counter++} time approach`);
    const sum2 = await add(sum, 50);
    console.log(`${counter++} time approach`);
    const sum3 = await add(sum2, -3);
    return sum3;
}

doWork().then(result => {
    console.log('result', result);
}).catch(error => {
    console.log('error', error);
});
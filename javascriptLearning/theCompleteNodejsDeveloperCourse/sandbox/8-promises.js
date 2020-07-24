const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Things went wrong');
        reject('Error wrong');
        resolve([7, 4, 1]);
    }, 2000);
});

doWorkPromise.then((result) => {
    console.log('Success', result);
}).catch((error) => {
    console.log('Error', error);
})
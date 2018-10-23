const add = (a, b) => {
    return new Promise((resolve, reject) => {
        if (typeof a != 'number' || typeof b != 'number') {
            return reject('ERROR123');
        }
        return resolve(a + b);


    });
};
add(4, 5)
    .then(res => console.log(res))
    .catch(error => console.log(error));


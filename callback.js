
const add = (a, b, cb) => {
    setTimeout(() => {
        let err;
        let res = 0;
        if (typeof a != 'number' || typeof b != 'number') {
            err = 'tham so phai co kieu number';
        }
        res = a + b;
        return cb(err, res);
    }, 1000);
};
add(4, 5, (err, res) => {
    if (err) {
        console.log(`loi: ${err}`);
    } else {
        console.log(`ket qua: ${res}`);
    }
});

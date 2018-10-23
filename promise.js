let check = 0;
const arrPromise = [];
for (let i = 0; i < 100; i++) {
    arrPromise.push(new Promise(resolve => {
        console.log(`thanh cong! ${check}`);
        check++;
        resolve('da thuc thi');
    }));
}
Promise.all(arrPromise).then(() => {
    console.log(`thanh cong! `);
});

console.log(1);

setTimeout(() => {
    console.log(2);
});

console.log(3);

Promise.resolve().then(() => {
    console.log(4);
});

console.log(5);

Promise.reject().catch(() => {
    console.log(6);
});

new Promise((resolve) => {
    console.log(7);
    resolve();
}).then(() => {
    console.log(8);
});

console.log(9);

// 1, 3, 5, 7, 9, 4, 6, 8, 2

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    let allocation = ""
    for (let i=1; i<=line; i++) {
        allocation=""
        for (let j=1; j<=i; j++) {
            allocation += "*"
        }
        input.push(allocation)
    }
}).on('close', function () {
    for(let r=0; r<input.length; r++) {
        console.log(input[r])
    }
});
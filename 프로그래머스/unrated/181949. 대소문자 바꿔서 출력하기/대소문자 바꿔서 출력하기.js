const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = ""; 

rl.on('line', function (line) {
    input = line.split(""); 
}).on('close', function(){
    let result = "";
    for(let i = 0; i < input.length; i++) {
        if(input[i] === input[i].toLowerCase()) {
            result += input[i].toUpperCase(); 
        } else if(input[i] === input[i].toUpperCase()) {
            result += input[i].toLowerCase(); 
        } 
    }
    console.log(result);
});

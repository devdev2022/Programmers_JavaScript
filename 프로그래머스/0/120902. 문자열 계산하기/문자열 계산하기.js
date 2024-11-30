function solution(my_string) {
    let arrayed = my_string.split (" ")
    let result = 0;
    
    let operator = '+'
    
    for(let i=0; i<arrayed.length; i++) {
        if(!isNaN(arrayed[i])) {            
            switch (operator) {
                case '+':
                    result = result+Number(arrayed[i]);
                    break;
                case '-':
                    result = result-Number(arrayed[i]);
                    break;
                case '*':
                    result = result*Number(arrayed[i]);
                    break;
                case '/':
                    result = result/Number(arrayed[i]);
                    break;
                default:
                    break;
            } 
            console.log(arrayed[i])
        } else {
            operator = arrayed[i];
        }
    }
    return result
}
function solution(chicken) {
    let countChicken = chicken 
    let remains = 0;
    let result = 0; 
    while(countChicken>1) {
        result += countChicken/10
        countChicken=countChicken/10
    }
    return Math.floor(result)
}




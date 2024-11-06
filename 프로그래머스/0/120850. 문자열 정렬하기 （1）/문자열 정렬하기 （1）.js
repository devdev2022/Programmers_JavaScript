function solution(my_string) {
    let array = my_string.replace(/[a-zA-Z]/g, "").split("")
    let numberArray = []
    for (const i of array) {
        numberArray.push(Number(i))
    }
    
    let answer = numberArray.sort((a,b)=>a-b)
    
    return answer;
}
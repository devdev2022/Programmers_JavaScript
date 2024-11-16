function solution(my_string) {
    let replaced = my_string.replace(/\D+/g, ' ');
    
    let numbers = replaced.trim().split(' ')
    
    let result = 0;
    for(let i=0; i<numbers.length; i++) {
        result += Number(numbers[i])
    }
    
    return result;
}
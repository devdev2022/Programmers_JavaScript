function solution(numbers, direction) {
    if(direction==="right"){
        let value = numbers.pop()
        numbers.splice(0,0,value)
    }
    
    if(direction==="left"){
        let value = numbers.shift()
        numbers.splice(numbers.length,0,value)
    }
    return numbers
}
function solution(num_str) {
    let number = num_str.split("")
    let result = 0
    for(i=0; i<num_str.length; i++) {
        result += parseInt(num_str[i])
    }
    return result
}
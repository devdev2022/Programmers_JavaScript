function solution(my_string, m, c) {
    let result = ""
    for(i=c; i<=my_string.length; i+=m) {
        result += my_string[i-1]
    }
    return result 
}
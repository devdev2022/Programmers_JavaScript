function solution(my_string) {
    let array = my_string.toLowerCase().split("")
    let answer = array.sort().join("")
    return answer;
}
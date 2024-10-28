function solution(array) {
    let answer = [];
    let max = Math.max(...array)
    answer.push(max)
    
    let index = array.findIndex((num) => num === answer[0]);
    answer.push(index)
    
    return answer;
}
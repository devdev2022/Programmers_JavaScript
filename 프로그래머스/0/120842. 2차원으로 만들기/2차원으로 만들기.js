function solution(num_list, n) {
    let answer = []
    const length = num_list.length/n
    
    for(let i=0; i<length; i++) {
        answer.push(num_list.slice(n*i, n*(i+1)))
    }
    
    return answer;
}
function solution(n, k) {
    let m = Math.floor(n/10)
    let answer = 12000*n+2000*k-2000*m
    return answer;
}
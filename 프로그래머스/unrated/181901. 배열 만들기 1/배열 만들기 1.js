function solution(n, k) {
    let result = [] 
    for(i=1; i<=n/k; i++) {
        result.push(k*i)
    }
    return result
}

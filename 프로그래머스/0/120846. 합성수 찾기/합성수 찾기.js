function solution(n) {
    let count = 0;
    while(n>1) {
        let i=n-1
        while(i>1) {
            if(n%i === 0) {
                count++
                break;
            }
            i--
        }
        n--
    }
    return count 
}
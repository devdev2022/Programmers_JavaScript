function solution(n) {
    if(n%2 === 1) {
        let i=1
        let odd = 0
        while(i<=n) {
            odd += i
            i+=2
        }
        return odd
    }
    else if(n%2 === 0) {
        let i=2
        let even =0
        while(i<=n) {
            even += i**2
            i+=2
        }
        return even
    }
}
function solution(a, d, included) {
let search = included.map((x, index) => x === true ? index : -1).filter(index => index !== -1);
    let result = 0
    for(i=0; i<search.length; i++) {
        result += a+d*search[i]
    }
    return result 
}
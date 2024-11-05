function solution(num, k) {
    let numString = num.toString()
    let kString = k.toString()
    let answer = -1;
    for(let i=0; i<numString.length; i++) {
        if(numString[i]===kString) {
            return answer = i+1
        }
    }
    return answer;
}
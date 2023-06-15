function solution(intStrs, k, s, l) {
    let result = []
    for(i=0; i<intStrs.length; i++) {
        let arr = intStrs[i].split("")
        let versus = parseInt(arr.slice(s,s+l).join(""))
    if(versus>k) {
        result.push(versus)
    }
    }
    return result
}
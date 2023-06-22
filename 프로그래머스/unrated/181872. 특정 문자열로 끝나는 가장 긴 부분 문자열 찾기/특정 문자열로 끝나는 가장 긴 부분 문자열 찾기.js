function solution(myString, pat) {
    let arr = myString.split("")
    let arrange = myString.lastIndexOf(pat)
    if(arrange !== -1) {
        return arr.slice(0, arrange+pat.length).join("")
    }
}
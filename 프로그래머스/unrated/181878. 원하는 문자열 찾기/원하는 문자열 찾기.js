function solution(myString, pat) {
    const regex = new RegExp(pat, 'i')
    let check = myString.match(regex)
    if(check !== null) {
        return 1
    }
    else return 0
}
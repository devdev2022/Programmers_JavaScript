function solution(date1, date2) {
    let check1 = parseInt(date1.join(""))
    let check2 = parseInt(date2.join(""))
    if(check1===check2) {
        return 0
    }
    return check1<check2? 1:0
}
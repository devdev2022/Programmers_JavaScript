function solution(myString) {
    let pattern = /[a-k]/g
    return myString.replace(pattern, "l")
}
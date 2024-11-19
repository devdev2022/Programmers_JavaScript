function solution(array) {
    let string = array.join("")
    return (string.match(/7/g) || []).length
}
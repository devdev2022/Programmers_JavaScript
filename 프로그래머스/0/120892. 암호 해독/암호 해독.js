function solution(cipher, code) {
    let array = [];
    for (let i=code-1; i<cipher.length; i+=code) {
        array.push(cipher[i])
    }
    let result = array.join("")
    return result;
}
function solution(arr) {
    const length = arr.length;
    const targetLength = Math.pow(2, Math.ceil(Math.log2(length)));
    for (let i = length; i < targetLength; i++) {
        arr.push(0);
    }
    return arr;
}

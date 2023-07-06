function solution(A, B) {

    let count = 0;
    while (A !== B) {
        let k = Array.from(A)
        k.unshift(k.pop())
        A = k.join('')
        count++;
        if (count > A.length) return -1;
    }
    return count;
}
function solution(A, B) {
    let arrayA = A.split("");
    let count = 0;

    for (let i = 0; i < arrayA.length; i++) {
        if (arrayA.join("") === B) {
            return count;
        }

        let first = arrayA.pop(); 
        arrayA.unshift(first);
        count++;
    }

    return -1
}
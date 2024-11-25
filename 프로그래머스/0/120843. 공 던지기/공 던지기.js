function solution(numbers, k) {
    const repeatedArray = Array(k).fill(numbers).flat();
    return repeatedArray[k*2-2]
}
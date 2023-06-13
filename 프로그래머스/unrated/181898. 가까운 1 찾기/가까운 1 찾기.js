function solution(arr, idx) {
    for(i=0; i<arr.length; i++) {
        if(arr[i]===1&&i>=idx) {
            return i
        }
    }
    return -1
}
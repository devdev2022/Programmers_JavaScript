function solution(arr, k) {
    let result = []
    if (k%2===1) {
        for(i=0; i<arr.length; i++) {
            result.push(k*arr[i])
        }
    }
    else if(k%2===0) {
        for(i=0; i<arr.length; i++) {
            result.push(k+arr[i])
        }
    }
    return result
}
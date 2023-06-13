function solution(arr, intervals) {
    let result1 = []
    let result2 = []
    for(i=intervals[0][0]; i<=intervals[0][1]; i++) {
        result1.push(arr[i])
    }
    for(i=intervals[1][0]; i<=intervals[1][1]; i++) {
        result2.push(arr[i])
    }
    return result1.concat(result2)
}
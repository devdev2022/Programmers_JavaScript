function solution(arr) {
    let result = []
    for(i=0; i<arr.length; i++) {
        let k=1
        while(k<=arr[i]) {
            result.push(arr[i])
            k++
        }
    }
    return result
}
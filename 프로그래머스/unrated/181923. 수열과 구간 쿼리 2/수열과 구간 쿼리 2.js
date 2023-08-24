function solution(arr, queries) {
    let result = [];

    for(let i = 0; i < queries.length; i++) {
        let temp = [];  

        for(let j = queries[i][0]; j <= queries[i][1]; j++) {
            if(arr[j] > queries[i][2]) {
                temp.push(arr[j]);
            }
        }
        if(temp.length === 0) {
            result.push(-1);
        } else {
            result.push(Math.min(...temp));
        }
    }
    return result;
}

function solution(arr, delete_list) {
    let deleteSet = new Set(delete_list);
    let result = arr.filter(num => !deleteSet.has(num));
    return result;
}

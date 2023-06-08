function solution(num_list, n) {
    let element = num_list.slice(0,n)
    let result = num_list.splice(n)
    result.push(...element)
    return result
}
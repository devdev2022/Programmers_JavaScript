function solution(num_list) {
    let result = num_list.sort((a,b)=>a-b)
    return result.slice(0,5)
}
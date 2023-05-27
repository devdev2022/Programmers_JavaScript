function solution(num_list) {
    let end = num_list.length-1
    if(num_list[end]>num_list[end-1]) {
        num_list.push(num_list[end]-num_list[end-1])
        return num_list
    }
    else if(num_list[end]<=num_list[end-1]) {
        num_list.push(num_list[end]*2)
        return num_list
    } 
}
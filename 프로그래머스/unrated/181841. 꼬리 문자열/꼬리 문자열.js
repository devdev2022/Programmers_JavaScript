function solution(str_list, ex) {
    let result = str_list.filter(word => !word.includes(ex));
    return result.join("")
}
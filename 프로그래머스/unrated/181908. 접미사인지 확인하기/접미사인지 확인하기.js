function solution(my_string, is_suffix) {
    let start = my_string.length - is_suffix.length
    let end = my_string.length
    let result = my_string.slice(start, end)
    if(result === is_suffix) {
      return 1
    }
    else return 0
}
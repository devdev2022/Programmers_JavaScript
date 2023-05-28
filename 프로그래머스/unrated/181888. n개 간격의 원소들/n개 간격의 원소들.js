function solution(num_list, n) {
    let i=0
    let result = []
    while(i<=num_list.length) {
        result.push(num_list[i])
        i+=n
    }
    return result.filter((element) => {
  return element != null;
})
}
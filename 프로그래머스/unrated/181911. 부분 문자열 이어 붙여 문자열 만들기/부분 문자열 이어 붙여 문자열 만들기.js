function solution(my_strings, parts) {
    let i=0
    let k=0
    let result = []
    while (k<parts.length && i<my_strings.length) {
      let arr = my_strings[i].slice(parts[k][0],parts[k][1]+1)
      result.push(arr)
      i++
      k++
    }        
  return result.join("")
}
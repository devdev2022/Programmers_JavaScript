function solution(arr, flag) {     let result = []
    for(let i=0; i<flag.length; i++) {
      if(flag[i]===true) {
        let arrange = 1
        while(arrange<=arr[i]*2) {
          result.push(arr[i])
          arrange++
        }
      }
      else if(flag[i]===false) {
        let arrange = 1
        while(arrange<=arr[i]) {
          result.pop()
          arrange++
        }
      }
      }
  return result
}
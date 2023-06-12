function solution(n) {
    if(n===1) {
        return [[1]]
    }
    let arr = []
    let i=0
    if(n!==1) {
        while (i<n) {
            arr.push(0)
           i++ 
        }
        const result = arr.map((_, i) => {
  const clonedArr = [...arr]; 
  clonedArr[i] = 1; 
  return clonedArr;
});
        return result
    }
}
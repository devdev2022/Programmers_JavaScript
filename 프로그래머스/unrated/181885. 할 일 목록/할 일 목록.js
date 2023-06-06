function solution(todo_list, finished) {
    let index = finished
  .map((value, idx) => value ? -1 : idx) 
  .filter(idx => idx !== -1); 
    let i=0
    let result = []
    while (i<index.length) {
        result.push(todo_list[index[i]])
        i++
    }
    return result
}


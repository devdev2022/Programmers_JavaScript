function solution(quiz) {
    let result =[]
    let arr = []
    for(i=0; i<quiz.length; i++) {
     arr.push(quiz[i].split('='))
    }
  for(i=0; i<arr.length; i++) {
    if(eval(arr[i][0])===Number(arr[i][1])) {
      result.push("O")
    }
    else result.push("X")
  }
  return result
}
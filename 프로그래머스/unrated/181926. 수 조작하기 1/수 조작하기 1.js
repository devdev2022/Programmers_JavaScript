function solution(n, control) {
     let caculator = [];
    let answer = {
      "w" : 1,
      "s" : -1,
      "d" : 10,
      "a" : -10
    }
  
    let approach = control.split("")
    for(i=0; i<approach.length; i++) {
      caculator.push(answer[approach[i]])
    }
  return n+caculator.reduce((acc,curr)=>acc+curr)
}
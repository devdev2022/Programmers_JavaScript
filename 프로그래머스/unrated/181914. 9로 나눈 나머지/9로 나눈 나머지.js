function solution(number) {
  let change = number.split("");
  let result = 0
  for(i=0; i<number.length; i++) {
    result += parseInt(number[i])
  }
    return result%9
}
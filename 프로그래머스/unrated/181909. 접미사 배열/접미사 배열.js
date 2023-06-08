function solution(my_string) {
  let i = 0;
  let result = [];
  while (i < my_string.length) {
    let substring = my_string.substring(i);
    result.push(substring);
    i++;
  }
  return result.sort()
}

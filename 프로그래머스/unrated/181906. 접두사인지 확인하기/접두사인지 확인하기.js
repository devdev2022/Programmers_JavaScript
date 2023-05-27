function solution(my_string, is_prefix) {
    let regex = new RegExp("^" + is_prefix);

if (regex.test(my_string)) {
  return 1}
    else return 0
}
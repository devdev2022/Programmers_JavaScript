function solution(my_string, overwrite_string, s) {
    let start = my_string.substring(0, s);
    let end = my_string.substring(s + overwrite_string.length);
    let result = start + overwrite_string + end;
    return result;
}

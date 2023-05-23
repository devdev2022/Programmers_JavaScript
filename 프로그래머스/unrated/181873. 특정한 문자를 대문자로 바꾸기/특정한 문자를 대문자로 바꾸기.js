function solution(my_string, alp) {
    let regex = new RegExp(alp, 'g');
    let result = my_string.replace(regex, alp.toUpperCase());
    return result;
}
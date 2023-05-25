function solution(my_string, target) {
    let check = my_string.includes(target)
    if(check) {
        return 1
    }
    else return 0
}
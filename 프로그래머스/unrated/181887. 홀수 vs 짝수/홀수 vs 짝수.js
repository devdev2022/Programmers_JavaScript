function solution(num_list) {
    let i=0;
    let k=1
    let even = 0
    let odd = 0
    while(i<num_list.length) {
        odd += num_list[i]
        i+=2
    }
    while(k<num_list.length) {
        even += num_list[k]
        k += 2
    }
    return Math.max(odd, even)
}
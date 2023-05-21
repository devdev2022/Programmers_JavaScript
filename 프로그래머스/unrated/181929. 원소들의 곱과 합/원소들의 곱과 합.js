function solution(num_list) {
    let multiply = 1;
    let square = 0; 
    for(i=0; i<num_list.length; i++) {
        multiply *= num_list[i]
        square += num_list[i]
    }
    if(multiply>square**2) {
        return 0
    }
    else return 1
}
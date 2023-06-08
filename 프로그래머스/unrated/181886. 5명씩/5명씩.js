function solution(names) {   
    let result = []
    let i=0
    while(i<names.length) {
        result.push(names[i])
        i+=5
    }
    return result
}
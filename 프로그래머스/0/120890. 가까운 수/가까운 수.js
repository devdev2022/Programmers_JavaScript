function solution(array, n) {    
    let difference = []   
    let sorted = array.sort((a,b)=>a-b)
        
    for(let i=0; i<sorted.length; i++) {
        difference.push(Math.abs(sorted[i]-n))
    }
    let index = difference.indexOf(Math.min(...difference))
    return sorted[index]
}
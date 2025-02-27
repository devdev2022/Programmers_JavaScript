function solution(num, total) {
    let array = []
    if(num%2 ===0) {
        let minimum = Math.floor(total/num) - (num/2) + 1        
                
        for(let i=0; i<num; i++) {
            array.push(minimum+i)
        }
        return array
    }
    
    if(num%2 ===1) {
        let middle = total/num;
        let minimum = total/num-((num-1)/2)
                
        for(let i=0; i<num; i++) {
            array.push(minimum+i)
        }
        return array
    }
    
}
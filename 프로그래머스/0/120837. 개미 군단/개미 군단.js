function solution(hp) {
    if((hp/5) ===0) {
        if((hp/3)===0) {
            return hp
        }  
        if((hp/3)!=0) {
            let result = Math.floor(hp/3) + hp%3
            return result
        }        
    }
    if((hp/5) !=0) {
        let remains = hp%5
        return Math.floor(hp/5) + Math.floor(remains/3) + remains%3
    }
}
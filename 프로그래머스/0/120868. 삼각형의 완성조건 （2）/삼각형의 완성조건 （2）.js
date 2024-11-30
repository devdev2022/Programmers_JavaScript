function solution(sides) {
    sides.sort((a,b)=>a-b)
    
    //case1
    let i=sides[1]-sides[0]
    while(sides[1]<i+sides[0]) {
        i++
    }
    let case1 = sides[1]-i    
    
    //case2
    let j=sides[1]+1
    while(j<sides[0]+sides[1]) {
        j++
    }
    let case2=j-sides[1]-1
    
    const result = case1+case2
    return result    
}
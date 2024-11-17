function solution(s) {
    let answer = ""
    let arrayed = s.split("")
    const objected = arrayed.reduce((acc,curr)=>{
        acc[curr]=(acc[curr] || 0) +1
        return acc
     },{})
    
    return Object.keys(objected).filter(key => objected[key] === 1).sort().join("")
    
}
function solution(str1, str2) {
    let arr1 = str1.split("")
    let arr2 = str2.split("")
    
    arr2.reduce((acc, _,idx)=>{
        arr1.splice(2*idx+1, 0, arr2[idx])        
    }, arr2[0])
    
    return arr1.join("")
}
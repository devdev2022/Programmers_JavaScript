function solution(common) {
    if(common[1]-common[0] === common[2]-common[1]) {
        return common[0]+(common[1]-common[0])*(common.length)
    }
    
    if(common[1]/common[0] === common[2]/common[1]) {
        return common[0]*(common[1]/common[0])**(common.length)
    }
}
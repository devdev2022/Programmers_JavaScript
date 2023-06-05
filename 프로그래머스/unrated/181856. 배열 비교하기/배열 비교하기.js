function solution(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return arr1.length>arr2.length? 1 : -1
    }
    else if(arr1.length === arr2.length) {
        let size1 = arr1.reduce((acc, curr)=> acc+curr)
        let size2= arr2.reduce((acc, curr)=> acc+curr)
        if(size1===size2) {
            return 0
        }
        else return size1>size2 ? 1 : -1
    }
}

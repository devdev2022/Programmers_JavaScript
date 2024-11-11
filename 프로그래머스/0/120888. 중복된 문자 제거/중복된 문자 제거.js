function solution(my_string) {
    let array;
    let stringArray = my_string.split("")
    for(let i=0; i<stringArray.length; i++) {
        array = stringArray.filter((item, index)=>stringArray.indexOf(item)===index)
    }
    
    return array.join("")
}
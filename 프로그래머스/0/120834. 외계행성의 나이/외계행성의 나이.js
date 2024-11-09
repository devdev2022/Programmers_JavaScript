function solution(age) {
    const ageArray = age.toString().split("")
    const data = {
        0: "a",
        1: "b",
        2: "c",
        3: "d",
        4: "e",
        5: "f",
        6: "g",
        7: "h",
        8: "i",
        9: "j"
    }
    
    let result = "";
    for(let i=0; i<ageArray.length; i++) {
        result += data[ageArray[i]]
    }
    
    return result;
}
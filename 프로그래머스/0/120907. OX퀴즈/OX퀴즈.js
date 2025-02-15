function solution(quiz) {
    const calculation = quiz.map((value)=>{
        return value.split(" ")
    })
    let resultArray = [];
    for(let i=0; i<calculation.length; i++) {
        if(calculation[i][1] === "-") {
            const result = Number(calculation[i][0]) - Number(calculation[i][2])
            if(result === Number(calculation[i][4])) {
                resultArray.push("O")
            } else {
                resultArray.push("X")
            }
        }
        
        if(calculation[i][1] === "+") {
            const result = Number(calculation[i][0]) + Number(calculation[i][2])
            if(result === Number(calculation[i][4])) {
                resultArray.push("O")
            } else {
                resultArray.push("X")
            }
        }                
    }
    return resultArray
}
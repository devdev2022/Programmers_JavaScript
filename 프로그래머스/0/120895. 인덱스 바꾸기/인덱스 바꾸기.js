function solution(my_string, num1, num2) {
    let changetype = my_string.split("")
    let target = changetype[num1]
    let bullet = changetype[num2]
    
    changetype[num2] = changetype[num1]
    changetype[num1] = bullet
    
    let result = changetype.join("")
    return result
}
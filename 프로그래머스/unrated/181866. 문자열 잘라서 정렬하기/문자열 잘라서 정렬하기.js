function solution(myString) {
    let arr = myString.split("x")
    let nox = arr.filter(element=> element!=="x").filter(x=>x !=="")
    return nox.sort()
}
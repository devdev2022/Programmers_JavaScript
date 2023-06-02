function solution(myString) {
    let result = myString.replace(/a/g, 'A');
    result = result.replace(/[B-Z]/g, function(element) {
        return element.toLowerCase();
    })
    return result
}
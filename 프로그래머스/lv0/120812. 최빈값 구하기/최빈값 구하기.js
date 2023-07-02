function solution(array) {
    let count = {};
    array.forEach(val => {
        if (count[val]) {
            count[val] += 1;
        } else {
            count[val] = 1;
        }
    });

    let maxValue = Math.max(...Object.values(count));
    let maxKeys = Object.keys(count).filter(key => count[key] === maxValue);

    if (maxKeys.length > 1) {
        return -1;
    } else {
        return parseInt(maxKeys[0]);
    }
}

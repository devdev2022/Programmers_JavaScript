function solution(array) {
    let countObject = array.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});

    let max = Math.max(...Object.values(countObject));
    let modes = Object.keys(countObject).filter(key => countObject[key] === max);

    if (modes.length > 1) {
        return -1;
    } else {
        return Number(modes[0]);
    }
}

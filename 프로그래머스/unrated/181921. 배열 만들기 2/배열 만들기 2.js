function solution(l, r) {
    const max_length = String(r).length;

    let nums = [''];
    for (let i = 0; i < max_length; i++) {
        const newNums = [];
        for (let num of nums) {
            newNums.push(num + '0');
            newNums.push(num + '5');
        }
        nums = newNums;
    }

    nums = nums.map(Number);

    nums = nums.filter(num => l <= num && num <= r);

    nums.sort((a, b) => a - b);

    return nums.length ? nums : [-1];
}
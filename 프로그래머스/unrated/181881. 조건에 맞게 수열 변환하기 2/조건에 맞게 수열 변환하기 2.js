function solution(arr) {
    let prevArr = [...arr]; 
    let currArr = []; 
    let cnt = 0; 

    while(true) {
        currArr = prevArr.map(x => x >= 50 && x % 2 === 0 ? x / 2 : x < 50 && x % 2 === 1 ? x * 2 + 1 : x);
        cnt++;

        if (prevArr.length === currArr.length && prevArr.reduce((acc, val, index) => acc && val === currArr[index], true)) {
            break;
        }
        prevArr = [...currArr];
    }
    return cnt - 1; 
}
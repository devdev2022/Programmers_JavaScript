function solution(i, j, k) {
    let answer = 0;
    const regex = new RegExp(k, 'g'); 

    for (let num = i; num <= j; num++) {
        const numStr = num.toString();
        const matches = numStr.match(regex); 
        if (matches) {
            answer += matches.length; 
        }
    }

    return answer;
}

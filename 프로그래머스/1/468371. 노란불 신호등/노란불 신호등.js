function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);  
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}


function solution(signals) {
    const cycles = signals.map(([G, Y, R]) => G + Y + R);
    const limit = cycles.reduce((acc, cycle) => lcm(acc, cycle), 1);
    
    for (let t = 1; t <= limit; t++) {
        const allYellow = signals.every(([G, Y, R]) => {
            const pos = (t - 1) % (G + Y + R);
            return pos >= G && pos < G + Y;
        });
        if (allYellow) return t;
    }
    return -1;
}

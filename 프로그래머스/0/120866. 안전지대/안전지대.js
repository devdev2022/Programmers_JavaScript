function solution(board) {
    const n = board.length;
    const dangerZone = new Set();  
    
    const deltas = [
        [-1, 0], [1, 0], [0, -1], [0, 1],
        [-1, -1], [-1, 1], [1, -1], [1, 1]
    ];
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {                
                deltas.forEach(([dx, dy]) => {
                    const ni = i + dx;
                    const nj = j + dy;

                    if (ni >= 0 && ni < n && nj >= 0 && nj < n) {
                        dangerZone.add(`${ni},${nj}`);
                    }
                });
            }
        }
    }
    
    let safeCount = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 0 && !dangerZone.has(`${i},${j}`)) {
                safeCount++;
            }
        }
    }

    return safeCount;
}

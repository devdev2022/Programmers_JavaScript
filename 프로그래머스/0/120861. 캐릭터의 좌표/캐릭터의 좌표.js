function solution(keyinput, board) {
    // 초기 좌표 설정
    let x = 0, y = 0;
    
    // 맵의 경계 계산
    const maxX = Math.floor(board[0] / 2);
    const maxY = Math.floor(board[1] / 2);
    
    // 방향키 입력 처리
    for (let key of keyinput) {
        if (key === "right") x += 1;
        if (key === "left") x -= 1;
        if (key === "up") y += 1;
        if (key === "down") y -= 1;

        // 이동 범위 제한
        x = Math.max(-maxX, Math.min(maxX, x));
        y = Math.max(-maxY, Math.min(maxY, y));
    }
    
    // 최종 좌표 반환
    return [x, y];
}
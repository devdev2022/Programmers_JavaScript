function solution(dot) {
    const check = dot[0] * dot[1] > 0;
    return dot[0] > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
}
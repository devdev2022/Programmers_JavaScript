function solution(a, b) {
    if(parseInt([a,b].join(""))>parseInt([b,a].join(""))) {
        return parseInt([a,b].join(""))
    }
    else if(parseInt([a,b].join(""))<parseInt([b,a].join(""))) {
        return parseInt([b,a].join(""))
    }
    else return parseInt([a,b].join(""))
}
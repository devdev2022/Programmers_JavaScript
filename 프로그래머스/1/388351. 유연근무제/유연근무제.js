function solution(schedules, timelogs, startday) {
    let count = 0;

    for (let i = 0; i < schedules.length; i++) {
        let isAllOnTime = true;

        let weekdays = [];
        for (let j = 0; j < 7; j++) {
            let day = (startday + j) % 7;
            weekdays.push(day === 0 ? 7 : day);
        }

        for (let j = 0; j < 7; j++) {
            let currentDay = weekdays[j];
            let arrival = timelogs[i][j];

            if (currentDay >= 6) {
                continue;
            }

            let h = Math.floor(schedules[i] / 100);
            let m = schedules[i] % 100 + 10;
            if (m >= 60) { h++; m -= 60; }
            let deadline = h * 100 + m;
            
            if (arrival > deadline) {
                isAllOnTime = false;
                break;
            }
        }
        if (isAllOnTime) count++;
    }
    return count;
}

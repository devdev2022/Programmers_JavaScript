function solution(friends, gifts) {
    let count = {}
    friends.forEach(friend => (count[friend] = 0));
    
    for (let i = 0; i < gifts.length; i++) {
        const [giver, receiver] = gifts[i].split(" "); 
            count[giver] += 1;
            count[receiver] -= 1;
    }
    console.log(count)
    //return Math.max(...Object.values(count))
    
}
function solution(friends, gifts) {
    let giftIndex = {}
    friends.forEach(friend => (giftIndex[friend] = 0));
    
    for (let i = 0; i < gifts.length; i++) {
        const [giver, receiver] = gifts[i].split(" "); 
            giftIndex[giver] += 1;
            giftIndex[receiver] -= 1;
    }
    
    let relation = {}
    friends.forEach((friend)=>{
        relation[friend] = {}
        friends.forEach((remains)=>{
            if(friend!==remains) {
                relation[friend][remains] = 0; 
            }
        })
    })
    
    let relationships = {};
    friends.forEach(friend => {
        relationships[friend] = {};
        friends.forEach(otherFriend => {
            if (friend !== otherFriend) {
                relationships[friend][otherFriend] = 0; 
            }
        });
    });

    for (let i = 0; i < gifts.length; i++) {
        const [giver, receiver] = gifts[i].split(" ");
        relationships[giver][receiver] += 1;
    }
    

    let nextMonthGifts = {};
    friends.forEach(friend => (nextMonthGifts[friend] = 0));

    for (let giver of friends) {
        for (let receiver of friends) {
            if (giver === receiver) continue;

            const givenToReceiver = relationships[giver][receiver];
            const receivedFromReceiver = relationships[receiver][giver];

            if(givenToReceiver>receivedFromReceiver) {
                nextMonthGifts[giver] +=1;
            }
            else if(givenToReceiver ===receivedFromReceiver||(givenToReceiver===0&&receivedFromReceiver===0)) {
                const giverIndex = giftIndex[giver]
                const receiverIndex = giftIndex[receiver]
                if(giverIndex>receiverIndex) {
                    nextMonthGifts[giver] += 1;
                }
            }
        }
    }
    return Math.max(...Object.values(nextMonthGifts));
}
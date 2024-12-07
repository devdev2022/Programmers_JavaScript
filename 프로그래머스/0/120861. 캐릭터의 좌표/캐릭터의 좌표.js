function solution(keyinput, board) {
    let x=0;
    let y=0; 
    
    const arrangeX = Math.floor((board[0]/2))
    const arrangeY = Math.floor((board[1]/2))          
          
    for(let i=0; i<keyinput.length; i++) {
        if(keyinput[i]==="right") {            
            if(Math.abs(x)>=arrangeX && x>0) {
                x=arrangeX
                continue;
            }
            x+=1
        }
        
        if(keyinput[i]==="left") {
            if(Math.abs(x)>=arrangeX && x<0) {
                x=-arrangeX
                continue;
            }                                    
            x-=1
        }        

        if(keyinput[i]==="up") {
            if(Math.abs(y)>=arrangeY && y>0) {
                y=arrangeY;
                continue;
            }            
            y+=1
        }
        
        if(keyinput[i]==="down") {
            if(Math.abs(y)>=arrangeY && y<0) {
                y=-arrangeY;
                continue;            
            }
            y-=1
        }
    }
    const result = [x,y]
    return result
}
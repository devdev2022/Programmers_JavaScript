function solution(video_len, pos, op_start, op_end, commands) {
    
    const convertSecond = (time)=> {
        return Number(time.split(":")[0])*60+Number(time.split(":")[1])
    }
    
    const converToForm = (time)=> {        
        const minute = String(Math.floor(time / 60)).padStart(2, "0");
        const second = String(time % 60).padStart(2, "0");
        return `${minute}:${second}`;
    }
    
    const skipOp = (time)=> {
        const OpStart = convertSecond(op_start)
        const OpEnd = convertSecond(op_end)   
        const VideoLen = convertSecond(video_len)
        
        if((time>=OpStart)&&(time<=OpEnd)) {
           time=OpEnd
        }
        return time
    }
    
    const nextTime = (time)=> {        
        const OpStart = convertSecond(op_start)
        const OpEnd = convertSecond(op_end)   
        const VideoLen = convertSecond(video_len)
        
        time+=10
        
        if((time>=OpStart)&&(time<=OpEnd)) {
            time=OpEnd
        }
        
        if(time>=VideoLen) {
            time=VideoLen
        }        
        return time
    }
    
    const prevTime = (time)=> {
        const OpStart = convertSecond(op_start)
        const OpEnd = convertSecond(op_end)   
        const VideoLen = convertSecond(video_len)
        
        time-=10
        
        if((time>=OpStart)&&(time<=OpEnd)) {
            time=OpEnd
        }
        if((time<=0)&&OpStart===0){
            time=OpEnd
        }            
        if(time<=0&&OpStart!==0) {
            time=0
        }        
        return time            
    }
      

    
    const timeCalculation = (time, array)=> {                
        
        let convertedTime = convertSecond(time)  
        convertedTime = skipOp(convertedTime)        
                
        for(let i=0; i<array.length; i++) {
            if(array[i]==="next") {
                convertedTime = nextTime(convertedTime)
            }            
            if(array[i]==="prev") {
                convertedTime = prevTime(convertedTime)
            }                                  
        }        
        return converToForm(convertedTime)
    }    
    return timeCalculation(pos,commands)            
}
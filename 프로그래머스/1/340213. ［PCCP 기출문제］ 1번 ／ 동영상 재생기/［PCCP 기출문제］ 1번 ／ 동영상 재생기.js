function solution(video_len, pos, op_start, op_end, commands) {
    
    const convertSecond = (time)=> {
        return Number(time.split(":")[0])*60+Number(time.split(":")[1])
    }   
    
    const timeCalculation = (time, array)=> {        
        
        const convertedOpStart = convertSecond(op_start)
        const convertedOpEnd = convertSecond(op_end)   
        const convertedVideoLen = convertSecond(video_len)
        
        let convertedTime = convertSecond(time)        
                    
        if((convertedTime>=convertedOpStart)&&(convertedTime<=convertedOpEnd)) {
           convertedTime=convertedOpEnd
        } 
                
        for(let i=0; i<array.length; i++) {
            if(array[i]==="next") {                                
                convertedTime=convertedTime+10       
                if((convertedTime>=convertedOpStart)&&(convertedTime<=convertedOpEnd)) {
           convertedTime=convertedOpEnd
        }
                if(convertedTime>convertedVideoLen) {
                    convertedTime=convertedVideoLen
                }
        
            }
            
            if(array[i]==="prev") {      
                convertedTime = convertedTime-10                
                
                if(convertedTime>=convertedOpStart&&(convertedTime<=convertedOpEnd)) {
                    convertedTime=convertedOpEnd
                }                
                if(convertedTime<=0) {
                    if(convertedOpStart!==0) {
                        convertedTime = 0
                    }
                    
                    if(convertedOpStart===0) {
                        convertedTime = convertedOpEnd
                    }
                }
            }
        }        
        const minute = Math.floor(convertedTime/60)<10 ? String(Math.floor(convertedTime / 60)).padStart(2, '0') : Math.floor(convertedTime/60).toString();
        const second = convertedTime%60===0 ? "00" : String((convertedTime%60)).padStart(2, '0')
        const result = [minute, ":", second];
        return result.join("");
    }     
    return timeCalculation(pos,commands)        
}
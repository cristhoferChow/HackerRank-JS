function birthdayCakeCandles(candles) {
    let count = 0;
    let h = 0;
    
    for(let i = 0; i<candles.length;i++){
        if(candles[i]>h){
            h=candles[i];
            count=1;
        }else if(candles[i]===h){
            count++;
        }
    }
    return count;
}
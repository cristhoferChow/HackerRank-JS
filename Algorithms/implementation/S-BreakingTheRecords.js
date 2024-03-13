function breakingRecords(scores) {
    let max = scores[0];
    let min = scores[0];
    
    let countmax = 0;
    let countmin = 0;
    
    for(let i=0; i<scores.length; i++){
        
        if(scores[i]>max){
            max = scores[i];
            countmax++
        }
        if(scores[i]<min){
            min = scores[i];
            countmin++
        }
        
    }
    
    return [countmax,countmin];

}
function miniMaxSum(arr) {
    
    let min = 0 - Math.max(...arr);
    let max = 0 - Math.min(...arr);
    let aux = 0;
    
    for(let i = 0; i < arr.length; i++){
        aux += arr[i];
    }
    
    max += aux;
    min += aux; 
    

    console.log(min, max);
}

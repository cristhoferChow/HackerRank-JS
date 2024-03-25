function plusMinus(arr) {
    let n = 0, z = 0, p = 0;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            z += 1;
        }
        else if(arr[i] > 0){
            p += 1;
        }
        else{
            n += 1;
        }
    }
    
    p = p/arr.length;
    n = n/arr.length;
    z = z/arr.length;
    
    
    
    console.log (p, '\n', n, '\n',z);
}
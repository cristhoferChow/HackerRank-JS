function simpleArraySum(ar) {
    let aux = 0;
    
    for(let i = 0; i< ar.length; i++){
        aux += ar[i];
    }
    
    return aux;

}
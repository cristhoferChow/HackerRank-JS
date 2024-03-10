function reverseArray(a) {
    
    let aux = [];
    
    for(let i = a.length - 1; i >= 0; i--){
        aux.push(a[i]);
    }
    return aux;
}

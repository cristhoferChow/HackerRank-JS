function diagonalDifference(arr){
    let dd = 0;
    let de = 0;
   
    for(let i = 0; i < arr.length; i++){
        dd += arr[i][i];
        de += arr[i][(arr.length)-(i+1)];
    }

    return Math.abs(dd-de);

}
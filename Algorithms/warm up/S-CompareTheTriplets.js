function compareTriplets(a=[], b=[]) {
    let aux = [0, 0]
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) {
            aux;
        } else if (a[i] > b[i]) {
            aux[0] +=1
        } else if (a[i] < b[i]) {
            aux[1] +=1
        }
    }
    return aux;
}
function deleteNth(arr,n){
    let count = {};
    return arr.filter(function(x){
        count[x] = (count[x]||0) + 1;
        return count[x] <= n;
    });
}
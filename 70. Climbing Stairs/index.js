let climbStairs = (n) => {
    if (n == 1 || n == 2){
        return n;
    }
    let arr = [1,2];

    for ( let i = 2; i< n; i++){
        arr[i] = arr[i-1]+arr[i-2];
    }
    console.log(arr);
    return arr[n-1];
};

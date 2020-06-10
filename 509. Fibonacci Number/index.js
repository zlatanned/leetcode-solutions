let fib = function(N) {
    let fiboArr = [0,1];
    for(let i = 2; i <= N; i++){
        fiboArr.push(fiboArr[i-2] + fiboArr[i-1]);
    }
    return fiboArr[N];
};

//console.log(fib(3));
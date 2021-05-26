const diffProductSum = (n) => {
    let sum = 0;
    let product = 1;
    let num = n + '';
    for (const x in n){
        digit = int(x);
        sum += digit;
        product *= digit;
    }
    
    return (product - sum);
}

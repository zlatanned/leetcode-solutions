const diffProductSum = (n) => {
    let sum = 0;
    let product = 1;
    let num = n + '';
    for x in n{
        digit = int(n);
        sum += digit;
        product *= digit;
    }
    
    return (product - sum);
}

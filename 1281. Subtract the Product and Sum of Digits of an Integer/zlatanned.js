const diffProductSum = (n) => {
    let sum = 0;
    let product = 1;
    let num = n + '';
    for (const i in num){
        digit = parseInt(num.charAt(i));
        sum += digit;
        product *= digit;
    }
    return (product - sum);
}

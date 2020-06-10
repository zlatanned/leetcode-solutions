function isPalindrome(x) {
    if (Math.sign(x) === -1){
        return false;
    }
    let arr = x.toString().split('').reverse().join('');
    return arr == x;
};
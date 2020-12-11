const search = ((nums, target) => {
    let result = -1;
    nums.forEach(ele => {
        if(ele === target) 
            result = nums.indexOf(ele);
    });
    return result;
});

console.log(search([4, 5, 6, 0, 7], 0));
console.log(search([1,3], 3));
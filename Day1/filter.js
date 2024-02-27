let nums = [2,5,6,8,9];
let res = nums.filter(function(el, ind, arr){
    return el%2 == 0;
});
console.log(res);

// same syntax as map & foreach
// return only true values 
// No additional cost
// filter also return array
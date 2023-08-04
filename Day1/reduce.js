// let nums = [3, 26, 32, 321, 1];
// let accumulator = 0;
// for(let i = 0; i < nums.length; i++){
//     accumulator += nums[i];
// }
// console.log(accumulator);

// without inital value
// in case of no intilized accumulator , acc value will be first element of the array
// let res = nums.reduce(function(acc, el, i , arr){
//     return acc+el;
// });
// console.log(res)

// first call =>acc = 3, acc+el = 3+26 = 29
// second call =>acc = 29, acc+el = 29+32 = 61
// third call =>acc = 61, acc+el = 61+321 = 382
// fourth call =>acc = 382, acc+el = 382+1 = 383

// With initial Value
// In case of have some value of accumulator, we have to pass initial value as 2nd parameter in reduce function
// let res = nums.reduce(function(acc, el, i , arr){
//     return acc+el;
// }, 10);
// console.log(res)

// Differences between all of them in a table format

// input      method    output
// ===========================
// array      forEach   undefined
// array      map       array
// array      filter    array
// array      reduce    single value

// Chaining
// forEach().map();  Not possible as output of foreach is undefined
// map().forEach(); It is possible bcz output of map is an array
// we can chain in differenet ways validation the rules
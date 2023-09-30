// map, filter, foreach, reduce only applicable in case of arrays

// let names = ["kundan", "Kunal", "Roshan", "Suveen", "Pratyush"];
// for(let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }

// forEach

// names.forEach(function(element, index, arr){
//     console.log(element);
//     console.log(index);
//     console.log(arr);
// });

// names.forEach(function(el, ind, arr){
//     console.log(el, arr);
// });

let nums = [2,3,4,5,6,7];
// nums.forEach(function(el,i, arr){
//     console.log("Square of "+ el + " is " + el**2);
// });

// let res = nums.forEach(function(el,i, arr){
//     return el**2;
// });

// console.log(res) // it will give us undefined, hence proved forEach doesn't return anything

// let res = nums.map(function(el,i, arr){
//     return el**2;
// });
// console.log(res);

// syntax of map & foreach are same
// map is returning an array, i.e box at no additional charges
// let box = [];
// let res = nums.forEach(function(el,i, arr){
//     box.push(el**2);
// });
// console.log(box); // it is taking additional charges
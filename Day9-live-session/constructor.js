// let obj = {
//     name: "Atmododeep",
//     sayHello(){
//         console.log(this.name);
//     }
// }
// obj.sayHello();

// Problem 1
// Create a function that return an object, object will be a nike product 
// having properties like name, price, type, etc

// function nikeProduct(n, p, t){
//     let product = {
//         name:n,
//         price:p,
//         type:t
//     };
//     return product;
// }
// let x = nikeProduct("nike sports",23000, "sports");
// console.log(x);

function nikeProduct(n, p, t){
    this.name = n;
    this.price = p;
    this.type = t;
}
let x = new nikeProduct("nike sports",23000, "sports");
console.log(x);


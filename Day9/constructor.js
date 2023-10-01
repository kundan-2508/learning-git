let obj = {
    name : "kundan",
    sayHello: function(){
        console.log(this);
    }
};

// constructor function
// what is constructor ? =>simply someone who does some kind of action like(youtuber, driver, painter, etc)
// constructing something but what is something here ?
// constructing object(s)
// who is constructing ? => constructor function
// function which will create objects are called constructor function


// Problem 1
// Create a function that return an object, object will be a nike product 
// having properties like name, price, type, etc

// function nikeProduct(n, p){
//     let obj = {};
//     obj.name =n;
//     obj.price = p;
//     return obj;
// }
// let k = nikeProduct("nike sports", 9000);
// console.log(k);

// Constructor function

function nikeProduct(n, p){
    this.name = n;
    this.price = p;
    // return this;
}
// let k = nikeProduct("Football shoes", 7000);
let k = new nikeProduct("Football shoes", 7000);
console.log(k); // why this is giving undefined

// new => returning the value(object)
// what's the difference b/w normal function & constructor function
// normal function can do many thing but constructor function only create objects
// if normal function can do what constructor function is doing, then why do we need construction function ?
// new keyword return objects and point to newly created object
// without new and this keyword, you will have to initilize and object and return it explictly









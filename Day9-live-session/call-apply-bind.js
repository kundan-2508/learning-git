// call, apply, bind
// this all three is applicable for functions

let bedroom = {
    name:"bedroom",
    // cookFood(food){
    //     console.log(`Serving ${food} in ${this.name}`);
    // }
}

let livingRoom = {
    name:"living Room"
}

let kitchen = {
    name: "kitchen",
    cookFood(food){
        // console.log(food1);
        // console.log(`Serving ${food} in ${bedroom.name}`);
        console.log(`Serving ${food} in ${this.name}`);
    }
}


// bedroom.cookFood("maggie");
// kitchen.cookFood("Litti Chokha");
// kitchen.cookFood.call(livingRoom, "Maggie", "Dal bati");
// kitchen.cookFood.apply(bedroom, ['Maggie', "omlete"]);
let x = kitchen.cookFood.bind(bedroom, "Maggie");
// console.log(x);
x();
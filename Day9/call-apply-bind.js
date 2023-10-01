// call, apply, bind
// it is related to function

let bedroom = {
    name: "my bedroom",
    purpose: "sleep",
};

const kitchen = {
    name : "my kitchen",
    purpose: "cooking food",
    cookFood(food){
        console.log(`serving ${food} in ${this.name}`);
        // console.log(`serving ${food} in ${bedroom.name}`);
        // it works but in case we want to call from living room
        // we again have to change the code
    }
}

kitchen.cookFood("Litti Chokha");

// suppose ind vs pak cricket match is streaming 
// and you don't want to step up
// but you need food

// let bedroom = {
//     name: "my bedroom",
//     purpose: "sleep",
//     // it doesn't make sense to cook food in bedroom
//     // also code duplicacy is there
//     // cookFood(food){
//     //     console.log(`serving ${food} in ${this.name}`);
//     // }
// };

// make this point to a different object
// kitchen.cookFood.call(bedroom);
// allow us to change the value of this
kitchen.cookFood.call(bedroom, "Dosa");

let regusr = {
    role : "user"
}
let admin = {
    role : "admin",
    oneDayAdminPass(){

    }
}

admin.oneDayAdminPass.call(regusr);
kitchen.cookFood.call(bedroom, "maggie", "Litti");
kitchen.cookFood.apply(bedroom, ["maggie", "Litti"]);

let x = kitchen.cookFood.bind(bedroom, "maggie");
console.log(x);
x();
// apply



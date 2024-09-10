const mysym = Symbol("Key1") // declration of symbol

const JsUser = {
    name:"Abhi",
    "Full Name" : "Abhishek N",
    [mysym]:"mykey1",
    age:18
}

// console.log(JsUser.name);
// console.log(JsUser["Full Name"]);
// console.log(JsUser[mysym]);
// console.log(typeof mysym);
// console.log(mysym)
Object.freeze(JsUser)

JsUser.name="Abhishek"

console.log(JsUser);

// if you freeze the object you cannot edit the propertices of object


JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


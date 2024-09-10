// singleton object
// let  Appuser = new Object();


const Appuser = {}

Appuser.id="132asd"
Appuser.name="Abhi"
// console.log(Appuser);

const regularUser={
    email:"abc@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Abhi",
            lastname:"N"
        }
    }
}

// console.log(regularUser.fullname);

const obj1 = {1:"A",2:"B"}
const obj2= {3:"C",4:"D"}

// const obj3 = Object.assign({},obj1,obj2) // all value store in the first parameter (target)

const obj3 = {...obj1,...obj2} // spread opration

// console.log(obj3);

console.log(Object.keys(Appuser)); // object .key return value is array 
console.log(Object.values(Appuser));
console.log(Object.entries(Appuser)); // Returns an array of key/values of the enumerable properties of an object

console.log(Appuser.hasOwnProperty('name')); // check the obcjts have the property or not


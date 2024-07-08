let name = "Abhishek"
let address = "Nandeppagol"

let fullname = `your name is ${name + " " + address}`

console.log(fullname)

// Another method of declaration of string

let gameName = new String('Abhishek-Nandeppagol') // here string is not a arrya is a object

console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('A'));

const newString= gameName.substring(0,4); //substring(stating_position, Ending position) ending position is not included
// it will not take the negative values
console.log(newString);

const String2= gameName.slice(-6,4) // it can take the negative value
console.log(String2);

const String3="    Abhishek   "
console.log(String3.trim()); // remove the white space from the both side left and right

const url= "https://abhi.com/abhishek%20mn"
console.log(url.replace('%20',"_")); // 
console.log(url.includes("Abhi")); // false it will check the case sencetivity

console.log(gameName.split("-")); // split the string into array on the given condition
// There are 7 primitive datatypes- N(null),N(number),S(symbol),S(string),B(boolean),B(bigInt),U(Undefined)
// Object is a non primitive datatype


let a = null 
let b = 345

let c = true;
let d = BigInt("4855")

let e = "manish"
let f = Symbol("I am a symbol")

let g = undefined 

console.log(typeof(d));
console.log(typeof(g));


// Objects

let obj = {
    name: "manish",
    course: "btech"
}
console.log(obj);
console.log(obj["course"]);
console.log(obj.name);
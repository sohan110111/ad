// false condition :
//     "", '', 0, false, NaN, undefined, null;
// some true condition :
//     "0", '0', true, [], {};

const age = 20;
if(age) {
    console.log("Condition is true.");
} else {
    console.log("Condition is false");
}

// any string is true without empty string  
const name = "John"; // const neme = ""; in condition is false but name = " "; is true condition
if (name) {
    console.log("Condition is true.")
}
else {
    console.log("Condition is false.");
}

let noValue;
console.log(noValue); // undefined value in condition is false 
if (noValue) { 
    console.log("Condition is true.")
}
else {
    console.log("undefined-Condition is false.");
}
// null value is equal is false
let Value = null;
console.log(noValue); // null value in condition is false 
if (Value) { 
    console.log("Condition is true.")
}
else {
    console.log("null-Condition is false.");
}

let number = 0;
if (number || number==0) {  // here this condition is true for number==0
    console.log("Condition is true.");
}
else {
    console.log("Condition is false.");
}
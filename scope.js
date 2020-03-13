
const global = 80;
function add(first, second) {
    let result = first + second;
    console.log(result);
    console.log(first + second + global); // global means it can access anywhere
    // or return result 
}
// console.log(result); it's out of scope
add(2, 4);

function check (num1, num2) {
    if (num1 > num2) {
        console.log("happy");
        let access1 = "let in block accessible"; 
        console.log(access1);
        var access2 = "var can be access outer";
        
    }
    console.log(access2);
}
//console.log(access2);  ReferenceError: access2 is not defined
const output = check(21, 20);

console.log(day); // it will be output undefined 
var day = "Friday";

// console.log(day1); // ReferenceError: Cannot access 'day1' before initialization
// let day1 = "Friday";

// different way to get undefined 
let value;
console.log(value);

function add(num1, num2) {
    console.log(num1+num2);
   // return (when we only put undefined)
}
console.log(add(30,20));

const tree = {food_tree : "Mango Tree", wood_tree : "Abachi"}
console.log(tree.bamboo_tree);

let fun = undefined; // it is not recommended
console.log(fun);

let array = [8, 3, 5, 3, 8];
console.log(array[11]); 

// null = no existence
const getValue = null;
console.log(getValue);

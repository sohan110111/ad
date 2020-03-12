
const array = [1, 2, 3, 4, 5];
console.log(array);
const output = [];
for (let i = 0; i < array.length; i++) {
    output.push(array[i]*array[i]);
} 
console.log(output);

function square (element) {
    return element * element;
}
console.log(array.map(square));

array.map(function(element, index, array){
    console.log(element, index, array);
})

const arraySquare = array.map(function(element) {
    return element * element;
})
console.log(arraySquare);

const res = x => x * x;
console.log(array.map(res));

const getOutput = array.map(x => x * x);
console.log(getOutput);

console.log(array.filter(x => x > 3)); // print greater than three
console.log(array.filter(x => x < 3)); // print smaller than three
console.log(array.find(x => x > 3)); // print three greater than nearest value
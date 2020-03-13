function add(num1, num2) {
    console.log(arguments); //[Arguments] { '0': 2, '1': 3, '2': 5 }
    console.log(...arguments); //2 3 5
    console.log([...arguments]); //[ 2, 3, 5 ]
    // accessing all elements by using [...arguments] for loop use max sum all elements etc.
    return num1 + num2 + arguments[2];
}
const result = add(2, 3, 5);
console.log(result);
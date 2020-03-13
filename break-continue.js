console.log("break check : ");
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < array.length; i++) {
    if (array[i] > 4) {
        break;
    }
    console.log(array[i]);
}

console.log("Continue check : ");
const number = [1, 2, -3, 4, 5, -6, 7, 8, -9];
for (let i = 0; i < number.length; i++) {
    if (number[i] < 0) {
        continue;
    }
    console.log(number[i]);
}
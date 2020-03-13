const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const part = nums.slice(2, 5); //[ 3, 4, 5 ]
console.log(part); 
console.log(nums);
const removed = nums.splice(2, 5, 77);// here inject value 77
console.log(removed);// [ 3, 4, 5, 6, 7 ]
console.log(nums); //[ 1, 2, 77, 8, 9 ]
const together = nums.join("");
console.log(together); //127789
console.log(nums.join(",")); //1,2,77,8,9
console.log(nums.join(" ")); //1 2 77 8 9
// nums.join() in this join value as that way you join value as your wish, And so on practice 
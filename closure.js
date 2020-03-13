function stopwatch() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

console.log(stopwatch()); // output [Function]
const clock1 = stopwatch();
console.log(clock1); //[Function]
console.log(clock1());//1
console.log(clock1());//2
// ..........clock1()++ value return
clock1();
console.log(clock1()); // 4

const clock2 = stopwatch();
console.log(clock2()); // 1
console.log(clock2()); // 2

// again 
console.log(clock1());  // 5
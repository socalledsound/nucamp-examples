
const initialState = 0
const myReducer = (highestYet, current) => {
    if(current > highestYet){
        return current
    } else {
        return highestYet
    }
    
}

const min = [3,4,7,2,8].reduce(myReducer)

console.log(min)
















function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

const sampleArray = [1, 2, 3, 4];

// const sum = sampleArray.reduce(add, 10);
// console.log(`The sum total is:`, sum);
// // ⦘ The sum total is: 10

// //or
// const sum2 = sampleArray.reduce((acc, val) => {
//     return acc + val
// }, 0)
// console.log('or sum2: ', sum);




// const product = sampleArray.reduce(multiply, 1);
// console.log(`The product total is:`, product);
// // ⦘ The product total is: 24

// //or
const mult2 = sampleArray.reduce((acc, val) => {
    return acc * val
})
//console.log('or mult2: ', mult2);

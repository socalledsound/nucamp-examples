const sum = (a, b) => a + b


// console.log(sum(1,2))


const add1 = (a) => a + 1


const log = (val) => console.log(val)

// log(100)
// log(add1(100))


// log([0,1,2].map(thing => add1(thing)))















const addThenLog = (val) => {
    const newVal = add1(val)
    return (string) => console.log(newVal + string)
}

const output = addThenLog(10)('   hi there')




const BrowserRouter = (aFunction){
    
    // match
    
    return aFunctionWithMap
}


// console.log(output)





